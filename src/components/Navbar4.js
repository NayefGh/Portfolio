import { HashLink as Link } from "react-router-hash-link";
import DropdownMenu2 from "../components/DropDownMenu2";

const Navbar4 = () => {
  return (
    <div className="navbar4">
      <div className="title">
      <Link to="/home" className="btn">
          <h1>RETURN</h1>
        </Link>
      </div>
      <DropdownMenu2 />
    </div>
  );
};

export default Navbar4;
