import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetResume, setStep } from "./../redux/actions";

const ResumeOutput = () => {
  const { profile, education, skills, projects, social } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  return (
    <div className="resume-output">
      <p>All steps completed - your resume is ready!!</p>
      <div className="resume-actions">
        <button onClick={() => dispatch(resetResume())}>RESET</button>
        <button onClick={() => dispatch(setStep(0))}>EDIT</button>
        <button className="button">DOWNLOAD / PREVIEW</button>
      </div>

      <div className="resume-preview">
        <h1>
          {profile.fname} {profile.lname}
        </h1>
        <p>Address : {profile.address}</p>
        <p>Phone Number: {profile.phone}</p>

        <h2>Skills</h2>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>

        <h2>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx}>
            <h3>{edu.college}</h3>
            <p>Graduation Year : {edu.completionYear}</p>
            <p>{edu.courseName}</p>
            <p>Percentage : {edu.percentage}%</p>
          </div>
        ))}

        <h2>Mini Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx}>
            <h3>{proj.projectName}</h3>
            <p>{proj.description}</p>
            <p>Tech Stack : {proj.techStack}</p>
          </div>
        ))}

        <h2>Social Links</h2>
        <ul>
          {social.map((s, idx) => (
            <li key={idx}>
              <a href={s} target="_blank" rel="noreferrer">
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeOutput;
