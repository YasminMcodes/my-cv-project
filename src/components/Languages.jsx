import { useState } from "react";
function Languages({ data, setData }) {
  const [form, setForm] = useState({ language: "", level: "" });

  const addLanguage = (e) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ language: "", level: "" });
  };

  return (
    <section>
      <h2>Languages</h2>
      <form onSubmit={addLanguage}>
        <input
          placeholder="Language"
          value={form.language}
          onChange={(e) => setForm({ ...form, language: e.target.value })}
        />
        <input
          placeholder="Level (e.g. C1)"
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
        />
        <button>Add</button>
      </form>
    </section>
  );
}
export default Languages;