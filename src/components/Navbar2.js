import { HashLink as Link } from "react-router-hash-link";
const Navbar2 = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/home" className="btn">
          <h1>RETURN</h1>
        </Link>
      </div>
      <div className="nav-btns">
        <Link to="#skills" smooth className="btn">
          Skills
        </Link>
        <Link to="#exp" smooth className="btn">
          Experience
        </Link>
        <Link to="#contact" smooth className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
