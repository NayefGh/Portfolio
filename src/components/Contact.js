import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    emailjs
      .send(
        "service_b9fxnyo",
        "template_wqm5mhr",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "PhlSsKuAHh4LI1ATH"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <h2>Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" disabled={loading} className="send-btn">
            {loading ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Contact;