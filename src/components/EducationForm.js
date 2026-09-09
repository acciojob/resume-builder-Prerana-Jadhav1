import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "./../redux/actions";

const emptyEntry = { courseName: "", completionYear: "", college: "", percentage: "" };

const EducationForm = () => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();
  const [entry, setEntry] = useState(emptyEntry);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addEducation(entry));
    setEntry(emptyEntry);
  };

  return (
    <div className="section-form">
      <h2>Add your Educator Details</h2>
      <input
        type="text"
        name="courseName"
        placeholder="Course Name*"
        value={entry.courseName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="completionYear"
        placeholder="Completion Year*"
        value={entry.completionYear}
        onChange={handleChange}
      />
      <input
        type="text"
        name="college"
        placeholder="College/School*"
        value={entry.college}
        onChange={handleChange}
      />
      <input
        type="text"
        name="percentage"
        placeholder="Percentage*"
        value={entry.percentage}
        onChange={handleChange}
      />
      <button id="add_education" className="button" onClick={handleAdd}>
        Add Education
      </button>

      <ul className="entries-list">
        {education.map((edu, idx) => (
          <li key={idx}>
            {edu.courseName} - {edu.college} ({edu.completionYear}) -{" "}
            {edu.percentage}%
            <button id="delete" onClick={() => dispatch(deleteEducation(idx))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationForm;
