import { Link } from "react-router-dom"
import "../css/NavBar.css"
import { RxHamburgerMenu } from "react-icons/rx";
function NavBar() {
  return (
    <><nav className="navbar">
      <div className="navbarlinks">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/teams">Teams</Link>
      </div>
    </nav>
      <nav className="hamburger">
        <div className="symbol">
            < RxHamburgerMenu/>
        </div>
        <div className="hamlinks">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/teams">Teams</Link>
        </div>


      </nav></>

  )
}

export default NavBar;