import "./styles.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from "react";


export default function App() {
  const [skills,setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

function addSkill(skill){
setSkills([...skills,skill]);
}
  
  return (
    <div className="App">
      <h1>React Dev Skills</h1>

      <SkillList skillList={skills} />

      <hr />
      <NewSkillForm skills={skills} addSkill={addSkill} />
    </div>
  );
}