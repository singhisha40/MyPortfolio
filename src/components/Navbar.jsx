import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <h2 className="nav-logo-name">IS.</h2>

      <ul>
        <li className="nav-home"><Link to="/">Home</Link></li>
        <li className="nav-about"><Link to="/about">About Me</Link></li>
        <li className="nav-internships"><Link to="/internships">
          Internships
        </Link></li>
        <li className="nav-projects"><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;