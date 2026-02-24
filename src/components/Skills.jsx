import { useState } from "react";
function Skills({ data, setData }) {
  const [skill, setSkill] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    setData([...data, skill]);
    setSkill("");
  };

  return (
    <section>
      <h2>Skills</h2>
      <form onSubmit={addSkill}>
        <input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Add skill" />
        <button>Add</button>
      </form>
    </section>
  );
}

export default Skills;