// src/components/Navbar.jsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FILMANIA</div>

      <div
        className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="schedule">Schedule</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul>

      <div className={`${styles.authLinks} ${menuOpen ? styles.active : ''}`}>
        <Link  to="/signup" className={styles.registerBtn}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
