import { FaFacebookF, FaInstagram, FaTwitter, FaSnapchatGhost } from "react-icons/fa";

function TeamCard ({ name, role, profile, image }) {
  return (
    <div className="team-card">
      <div className="team-card__img-container">
        <img src={image} alt={name} className="team-card__img" />
      </div>
      <div className="team-card__content">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="team-card__socials">
          <Link to={profile} target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
          <Link to={profile} target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          <Link to={profile} target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link to={profile} target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
