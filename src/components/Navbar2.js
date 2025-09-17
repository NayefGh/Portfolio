import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <Link to="/home" className="nav-title">
            Return
          </Link>
        </div>
        <div className="nav-links">
          <Link to="#skills" smooth className="nav-link">
            Skills
          </Link>
          <Link to="#exp" smooth className="nav-link">
            Experience
          </Link>
          <Link to="#contact" smooth className="nav-link">
            Contact
          </Link>
        </div>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="#skills" smooth className="mobile-link" onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="#exp" smooth className="mobile-link" onClick={toggleMenu}>
          Experience
        </Link>
        <Link to="#contact" smooth className="mobile-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
