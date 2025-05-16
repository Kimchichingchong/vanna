import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css"; // 👈 Import the styles

function Profile () {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    team: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setProfile(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(profile));
    alert("Profile updated!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>
        <input
          className="profile-field"
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="profile-field"
          type="text"
          name="team"
          value={profile.team}
          onChange={handleChange}
          placeholder="Team Name"
        />
        <input
          className="profile-field"
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="profile-field"
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="profile-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
