import SkillListItem from "./SkillListItem"

export default function SkillList({skillList}) {
  // Application logic, etc. goes here
  return (
    <ul>
      {skillList.map(s => <SkillListItem skill={s}/> )}
    </ul>
  );
}
