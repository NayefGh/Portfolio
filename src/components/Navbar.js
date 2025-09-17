import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-title">
          <Link to="/home" className="nav-title">
            Portfolio
          </Link>
        </div>

        <div className="nav-links">
          <Link to="#work" smooth className="nav-link">
            Work
          </Link>
          <Link to="#about" smooth className="nav-link">
            About
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
        <Link to="#work" smooth className="mobile-link" onClick={toggleMenu}>
          Work
        </Link>
        <Link to="#about" smooth className="mobile-link" onClick={toggleMenu}>
          About
        </Link>
        <Link to="#contact" smooth className="mobile-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
