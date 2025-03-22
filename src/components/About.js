import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="about">
      <div className="third-body">
        <h1>ABOUT ME</h1>
        <div className="second-title">
          <h2>I am a front-end developer based in Beirut.</h2>
          <p>
            I am a front-end developer based in Beirut looking for exciting
            opportunities.Likes to focus on accessibility when developing.
            Passionate and curious about solving problems. Currently, I’m
            exploring React JS.
          </p>
          <Link  index className="more-info" path="/" to="/About2">
            MORE ABOUT ME
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
