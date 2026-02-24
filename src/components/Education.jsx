import { useState } from "react";

function Education({ data, setData }) {
  const [form, setForm] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.schoolName || !form.titleOfStudy || !form.dateOfStudy) return;

    setData([...data, form]);

    setForm({
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    setData(data.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="info-section">
      <h2>Education</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={form.schoolName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="titleOfStudy"
          placeholder="Degree / Field of Study"
          value={form.titleOfStudy}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dateOfStudy"
          placeholder="Date (e.g. 2020 - 2024)"
          value={form.dateOfStudy}
          onChange={handleChange}
        />

        <button type="submit">Add Education</button>
      </form>

      {data.map((edu, index) => (
        <div key={index} className="entry-preview">
          <p><strong>{edu.schoolName}</strong></p>
          <p>{edu.titleOfStudy}</p>
          <p>{edu.dateOfStudy}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Education;