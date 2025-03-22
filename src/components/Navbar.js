import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/home" className="btn">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <div className="nav-btns">
        <Link to="#work" className="btn" smooth>
          Work
        </Link>
        <Link to="#about" smooth className="btn">
          About
        </Link>
        <Link to="#contact" smooth className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
