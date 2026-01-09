import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import js from "../icons/js.png";
import ht from "../icons/ht.png";
import css from "../icons/css.png";
import react from "../icons/rt.png";
import Pic2 from "../icons/pic2.png";
import link from "../icons/linkin.png";
import git from "../icons/github.png";
import Footer from "../components/Footer";
import TopBtn from "../components/TopBtn";
import Contact from "../components/Contact";

const PDF_file = process.env.PUBLIC_URL + "/CV.pdf";
const About2 = () => {
  const downloadFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar2 />
      <div className="about2">
        <div className="about-info">
          <h1>ABOUT ME</h1>
          <div className="about-para">
            <h3>I'm a front-end developer based in Beirut.</h3>
            <p>
              I am a front-end developer based in Beirut looking for exciting
              opportunities. Likes to focus on accessibility when developing.
              Passionate and curious about solving problems. Currently, I’m
              exploring Reactjs & bit of Designing. While I am not programming,
              I enjoy playing football and doing other sports activities.
              Learning more to improve my skills.
            </p>
            <div className="title-btns">
              <div className="download">
                <button
                  className="download-btn"
                  onClick={() => {
                    downloadFile(PDF_file);
                  }}
                >
                  DOWNLOAD RESUME
                </button>
              </div>
              <div className="btn-circle">
                <a href="https://github.com/NayefGh">
                  <img src={git} alt="" />
                </a>
              </div>
              <div className="btn-circle">
                <a href="https://www.linkedin.com/in/nayef-ghtaimy-5a8298303/">
                  <img src={link} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-pic">
          <img className="first-pic" src={Pic2} alt="" />
        </div>
        <h2 id="skills" className="about-skill">
          MY SKILLS
        </h2>
        <div className="skill-icon">
          <div className="skill-indiv">
            <img src={js} alt="" />
            <p>Javascript</p>
          </div>
          <div className="skill-indiv">
            <img src={ht} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill-indiv">
            <img src={css} alt="" />
            <p>Cascading Style Sheets (CSS)</p>
          </div>
          <div className="skill-indiv">
            <img src={react} alt="" />
            <p>React</p>
          </div>
        </div>
        <hr />
        <div className="about-info" id="exp">
          <h2>MY EXPERIENCE</h2>
          <div className="about2-group">
            <div className="about-para">
              <div className="exp-title">
                <div className="exp-right">
                  <h3>Front End Developer Intern</h3>
                  <h4>areeba/ Beirut-Lebanon</h4>
                </div>
                <h5>Mar 2024 - May 2024</h5>
              </div>
              <p>
                Developed responsive web pages using React JS, & JavaScript
                enhancing user experience. Collaborated with design and backend
                teams to ensure seamless integration and functionality. Also,
                optimized web performance, reducing load times and improving
                overall site efficiency. Implemented best practices in front-end
                development, contributing to higher code quality and
                maintainability
              </p>
            </div>
            <div className="about-para">
              <div className="exp-title">
                <div className="exp-right">
                  <h3>Dispatcher (Remotely)</h3>
                  <h4>A1 Elite Logistics/ Dearborn - Michigan</h4>
                </div>
                <h5>Oct 2021 - Feb 2024</h5>
              </div>
              <p>
                Streamlined office operations, improving overall efficiency and
                reducing administrative overhead by 20%. I also implemented a
                digital booking system that enhanced load management and reduced
                errors by 15%. In addition, I handled the dispatching of truck
                drivers by assigning loads for delivery across various states.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <Contact />
      <TopBtn />
      <Footer />
    </div>
  );
};

export default About2;
