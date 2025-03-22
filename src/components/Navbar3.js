import { HashLink as Link } from "react-router-hash-link";
import DropdownMenu from "../components/DropDownMenu";

const Navbar3 = () => {
  return (
    <div className="navbar3">
      <div className="title">
        <Link to="/home" className="btn">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default Navbar3;
