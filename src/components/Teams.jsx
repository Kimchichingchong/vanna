import React from "react";
import teamData from "../data/team_dummy_heads_subheads.json"; // adjust path as needed
import "./Teams.css"; // CSS for styling like your card

const TeamCard = ({ name, portfolio, profile_link }) => {
  return (
    <div className="team-card">
      <div className="avatar" />
      <h3>{name}</h3>
      <p>{portfolio}</p>
      <div className="social-icons">
        <a href={profile_link} target="_blank" rel="noreferrer" className="icon">🌐</a>
        <a href={profile_link} target="_blank" rel="noreferrer" className="icon">🐦</a>
        <a href={profile_link} target="_blank" rel="noreferrer" className="icon">📸</a>
      </div>
      
    </div>
  );
};

const TeamPage = () => {
  const heads = teamData.filter((person) => person.role === "head");
  const subheads = teamData.filter((person) => person.role === "subhead");

  return (
    <div className="team-page">
      <h1>Heads</h1>
      <div className="team-grid">
        {heads.map((person, idx) => (
          <TeamCard key={idx} {...person} />
        ))}
      </div>

      <h1>Subheads</h1>
      <div className="team-grid">
        {subheads.map((person, idx) => (
          <TeamCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
