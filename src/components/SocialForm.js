import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial, deleteSocial } from "./../redux/actions";

const SocialForm = () => {
  const social = useSelector((state) => state.social);
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (link.trim() === "") return;
    dispatch(addSocial(link));
    setLink("");
  };

  return (
    <div className="section-form">
      <h2>Add your Social Media Links</h2>
      <input
        type="text"
        name="Social"
        placeholder="Social Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button id="add_social" className="button" onClick={handleAdd}>
        Add Social
      </button>

      <ul className="entries-list">
        {social.map((s, idx) => (
          <li key={idx}>
            {s}
            <button onClick={() => dispatch(deleteSocial(idx))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialForm;
