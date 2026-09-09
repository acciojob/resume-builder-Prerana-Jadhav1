import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "./../redux/actions";

const ProfileForm = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setProfile({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="section-form">
      <h2>Add your profile details</h2>
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={profile.fname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={profile.lname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="Profile Image URL"
        value={profile.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfileForm;
