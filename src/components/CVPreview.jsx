import html2pdf from "html2pdf.js";
import { FaPrint } from "react-icons/fa";
import "../styles/CVPreview.css";

function CVPreview({ general, education, experience, skills, languages }) {
  const downloadPDF = () => {
    const element = document.getElementById("cv-preview");
    html2pdf().from(element).save("CV.pdf");
  };

  // ===============================
  // DEMO DATA
  // ===============================
  const demoPhoto =
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010";

  const demoGeneral = {
    name: "Alesia McKen",
    email: "notreal@email.com",
    phone: "+39 123 001 7890",
  };

  const demoEducation = [
    {
      schoolName: "University of Rome",
      titleOfStudy: "BSc Software Engineering",
      dateOfStudy: "2020 - 2024",
    },
  ];

  const demoExperience = [
    {
      companyName: "Tech Solutions SRL",
      positionTitle: "Frontend Developer Intern",
      responsibilities:
        "Developed React applications and improved UI performance.",
      dateFrom: "2023",
      dateUntil: "Present",
    },
  ];

  const demoSkills = ["React", "JavaScript", "HTML", "CSS"];

  const demoLanguages = [
    { language: "English", level: "C1" },
    { language: "Italian", level: "B2" },
  ];

  // ===============================
  // DISPLAY LOGIC
  // ===============================

  const isGeneralEmpty =
    !general?.name && !general?.email && !general?.phone;

  const displayedPhoto = general?.photo || demoPhoto;
  const displayedGeneral = isGeneralEmpty ? demoGeneral : general;
  const displayedEducation =
    education && education.length > 0 ? education : demoEducation;
  const displayedExperience =
    experience && experience.length > 0 ? experience : demoExperience;
  const displayedSkills =
    skills && skills.length > 0 ? skills : demoSkills;
  const displayedLanguages =
    languages && languages.length > 0 ? languages : demoLanguages;

  return (
    <>
      {/* PRINT BUTTON */}
      <button className="download-btn" onClick={downloadPDF}>
        <FaPrint size={20} />
      </button>

      {/* CV CONTENT */}
      <div className="cv" id="cv-preview">
        {/* HEADER */}
        <div className="cv-header">
          {/* ✅ ALWAYS RENDER IMAGE */}
          <img
            src={displayedPhoto}
            alt="profile"
            className="profile-img"
          />

          <div>
            <h1>{displayedGeneral.name}</h1>
            <p>{displayedGeneral.email}</p>
            <p>{displayedGeneral.phone}</p>
          </div>
        </div>

        {/* EDUCATION */}
        <h2>Education</h2>
        {displayedEducation.map((edu, index) => (
          <div key={index} className="cv-entry">
            <strong>{edu.schoolName}</strong>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.dateOfStudy}</p>
          </div>
        ))}

        {/* EXPERIENCE */}
        <h2>Experience</h2>
        {displayedExperience.map((exp, index) => (
          <div key={index} className="cv-entry">
            <strong>{exp.companyName}</strong>
            <p>{exp.positionTitle}</p>
            <p>
              {exp.dateFrom} - {exp.dateUntil}
            </p>
            <p>{exp.responsibilities}</p>
          </div>
        ))}

        {/* SKILLS */}
        <h2>Skills</h2>
        <ul>
          {displayedSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* LANGUAGES */}
        <h2>Languages</h2>
        <ul>
          {displayedLanguages.map((lang, index) => (
            <li key={index}>
              {lang.language} - {lang.level}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CVPreview;