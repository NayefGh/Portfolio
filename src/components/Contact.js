import What from "../icons/whatsapp.png";
import Mail from "../icons/mail.png";
import link from "../icons/linkin.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <div className="contact-icons">
          <div className="single-icon">
            <img src={What} alt="" />
            <a href="https://Wa.me/+96178964649">Lets Chat</a>
          </div>
          <div className="single-icon">
            <img src={Mail} alt="" />
            <p>nayefghtaimy@hotmail.com</p>
          </div>
          <div className="single-icon">
            <img src={link} alt="" />
            <a href="https://www.linkedin.com/in/nayef-ghtaimy-5a8298303/">
              Nayef Ghtaimy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
