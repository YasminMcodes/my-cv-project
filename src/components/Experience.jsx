import { useState } from "react";

function Experience({ data, setData }) {
  const [form, setForm] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
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

    if (!form.companyName || !form.positionTitle) return;

    setData([...data, form]);

    setForm({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      dateFrom: "",
      dateUntil: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    setData(data.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="info-section">
      <h2>Experience</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="positionTitle"
          placeholder="Position Title"
          value={form.positionTitle}
          onChange={handleChange}
        />

        <textarea
          name="responsibilities"
          placeholder="Main Responsibilities"
          rows="4"
          value={form.responsibilities}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dateFrom"
          placeholder="From (e.g. 2021)"
          value={form.dateFrom}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dateUntil"
          placeholder="Until (e.g. Present)"
          value={form.dateUntil}
          onChange={handleChange}
        />

        <button type="submit">Add Experience</button>
      </form>

      {data.map((exp, index) => (
        <div key={index} className="entry-preview">
          <p><strong>{exp.companyName}</strong></p>
          <p>{exp.positionTitle}</p>
          <p>{exp.dateFrom} - {exp.dateUntil}</p>
          <p>{exp.responsibilities}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Experience;