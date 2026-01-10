import commerce from "../icons/e-commerce.png";
import git from "../icons/github.png";
import mobile from "../icons/Mobile.png";
import marley from "../icons/marley.png";
import weather from "../icons/weather.png";

const Work = () => {
  return (
    <div id="work">
      <div className="second-body">
        <div className="work-title">
          <h1>Personal Work</h1>
          <p>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <div className="work-project">
          <div className="work-description">
            <h2>E-Commerce Website</h2>
            <p>
              Successfully crafted an engaging product page featuring a dynamic
              lightbox gallery showcasing proficiency in JavaScript development.
            </p>
            <div className="project-info">
              <h1>PROJECT INFO</h1>
              <hr />
              <div className="work-info">
                <p>Year</p>
                <p>2024</p>
              </div>
              <hr />
              <div className="work-info">
                <p>Role</p>
                <p>Front-end Developer</p>
              </div>
              <hr />
              <div className="work-pic">
                <img src={commerce} alt="" />
              </div>
              <div className="link-git">
                <a href="https://github.com/NayefGh/E-Commerce-Web">
                  SEE ON GITHUB
                </a>
                <img src={git} alt="" />
                {/* <a href="https://google.com">Check It</a> */}
              </div>
            </div>
          </div>
          <hr />
          <div className="work-description">
            <h2>Mobile Validation Service</h2>
            <p>
              Build a website where the user can input any number in the world.
              When entered, it will compare the number in the database and
              return all the info for it and its condition wheither its valid or
              not.
            </p>
            <div className="project-info">
              <h1>PROJECT INFO</h1>
              <hr />
              <div className="work-info">
                <p>Year</p>
                <p>2023</p>
              </div>
              <hr />
              <div className="work-info">
                <p>Role</p>
                <p>Front-end Developer</p>
              </div>
              <hr />

              <div className="work-pic">
                <img src={mobile} alt="" />
              </div>
              <div className="link-git">
                <a href="https://github.com/NayefGh/Micro-Service-Mobile-Validation">
                  SEE ON GITHUB
                </a>
                <img src={git} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="work-description">
            <h2>FoodTruck / Small Business Website</h2>
            <p>
              Successfully crafted a website for a small business for a food
              truck with responsive layout for mobile phones.
            </p>
            <div className="project-info">
              <h1>PROJECT INFO</h1>
              <hr />
              <div className="work-info">
                <p>Year</p>
                <p>2024</p>
              </div>
              <hr />
              <div className="work-info">
                <p>Role</p>
                <p>Front-end Developer</p>
              </div>
              <hr />
              <div className="work-pic">
                <img src={marley} alt="" />
              </div>
              <div className="link-try">
                <div className="link-git">
                  <a href="https://github.com/NayefGh/Small-Business">
                    SEE ON GITHUB
                  </a>
                  <img src={git} alt="" />
                </div>
                <a className="try" href="https://marleys-lb.netlify.app/">
                  TRY ME
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="work-description">
            <h2>Weather Website</h2>
            <p>
              A small weather website when the user can enter any city in the
              world and give real time weather for that city.
            </p>
            <div className="project-info">
              <h1>PROJECT INFO</h1>
              <hr />
              <div className="work-info">
                <p>Year</p>
                <p>2024</p>
              </div>
              <hr />
              <div className="work-info">
                <p>Role</p>
                <p>Front-end Developer</p>
              </div>
              <hr />
              <div className="work-pic">
                <img src={weather} alt="" />
              </div>
              <div className="link-git">
                <a href="https://github.com/NayefGh/Weather-Web">
                  SEE ON GITHUB
                </a>
                <img src={git} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Work;
