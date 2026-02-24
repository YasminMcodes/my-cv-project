import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <div className="layout">
      <div className="form-panel">
        <GeneralInfo data={general} setData={setGeneral} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
        <Skills data={skills} setData={setSkills} />
        <Languages data={languages} setData={setLanguages} />
      </div>

      <div className="preview-panel">
        <CVPreview
          general={general}
          education={education}
          experience={experience}
          skills={skills}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default App;