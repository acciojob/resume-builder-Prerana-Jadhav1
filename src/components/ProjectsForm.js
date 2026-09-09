import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "./../redux/actions";

const emptyEntry = { projectName: "", techStack: "", description: "" };

const ProjectsForm = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [entry, setEntry] = useState(emptyEntry);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addProject(entry));
    setEntry(emptyEntry);
  };

  return (
    <div className="section-form">
      <h2>Add your Mini Projects</h2>
      <input
        type="text"
        name="projectName"
        placeholder="Project Name*"
        value={entry.projectName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack*"
        value={entry.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description*"
        value={entry.description}
        onChange={handleChange}
      />
      <button id="add_project" className="button" onClick={handleAdd}>
        Add Project
      </button>

      <ul className="entries-list">
        {projects.map((proj, idx) => (
          <li key={idx}>
            {proj.projectName} - {proj.techStack}
            <button id="delete" onClick={() => dispatch(deleteProject(idx))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsForm;
