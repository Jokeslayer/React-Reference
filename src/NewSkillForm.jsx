import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ skills, addSkill }) {
  // Application logic, etc. goes here
  const [newSkillForm, setNewSkillForm] = useState({
    name: "",
    level: 1
  });

  function handleChange(evt) {
    // Replace with new object and use a computed property
    // to update the correct property
    const newSkillFormData = {
      ...newSkillForm,
      [evt.target.name]: evt.target.value
    };
    setNewSkillForm(newSkillFormData);
  }

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkillForm);
    setNewSkillForm({
      name: "",
      level: 1
    });
  }
  return (
    <form className="NewSkillForm" onSubmit={handleAddSkill}>
      <label> Skill </label>
      <input
        name="name"
        value={newSkillForm.name}
        onChange={handleChange}
        placeholder="New Skill"
        required
        pattern=".{2,}"
      />

      <label>Level</label>
      <select name="level" value={newSkillForm.level} onChange={handleChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
