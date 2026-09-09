import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "./../redux/actions";

const SkillsForm = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    if (skill.trim() === "") return;
    dispatch(addSkill(skill));
    setSkill("");
  };

  return (
    <div className="section-form">
      <h2>Add your Skill</h2>
      <input
        type="text"
        name="skill"
        placeholder="Your Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button id="add_skill" className="button" onClick={handleAdd}>
        Add Skill
      </button>

      <ul className="entries-list">
        {skills.map((s, idx) => (
          <li key={idx}>
            {s}
            <button id="delete_skill" onClick={() => dispatch(deleteSkill(idx))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsForm;
