import link from "../icons/linkin.png";
import git from "../icons/github.png";
import { HashLink as Link } from "react-router-hash-link";
const Intro = () => {
  return (
    <div>
      <div className="first-body">
        <div className="title-intro">
          <div className="intro">
            <h1>Hey, I'm Nayef Ghtaimy.</h1>
            <p>Welcome To My Portfolio</p>
            <div className="title-btns">
              <Link to="#contact" smooth>
                <button className="download-btn">CONTACT ME</button>
              </Link>
              <div className="download-btn">
                <a href="https://github.com/NayefGh">
                  <img src={git} alt="" />
                </a>
              </div>
              <div className="download-btn">
                <a href="https://www.linkedin.com/in/nayef-ghtaimy-5a8298303/">
                  <img src={link} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="title-pic">
          <img src={pic1} alt="" />
        </div> */}
      </div>
      <hr />
    </div>
  );
};

export default Intro;
