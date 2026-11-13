import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../data/socials.jsx";

const FORMSPREE_URL = "https://formspree.io/f/mbgodold";
const whatsappUrl = "https://wa.me/+201272745136";
export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="form">
          <h2>Let’s work together</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                value={formData.name}
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                value={formData.message}
                id="message"
                name="message"
                placeholder="Hi, I would like to ask you about..."
                required
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button
              className="form-btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p>Thanks! Your message has been sent.</p>}
            {status === "error" && (
              <p>Something went wrong, please try again.</p>
            )}
          </form>
        </div>

        <div className="social">
          <h2>Connect with me</h2>
          <p>
            Have a project in mind or want to grow your brand with short-form
            video? Send me a message or reach out directly, and let’s talk about
            it.
          </p>

          <ul className="contact-details">
            <li>
              <span className="label">Email</span>
              <a href="mailto:abdullah@example.com">abdllagamal49@gmail.com</a>
            </li>
            <li>
              <span className="label">WhatsApp</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                +20 127 274 5136
              </a>
            </li>
            <li>
              <span className="label">Response time</span>
              <span>Usually within 24 hours</span>
            </li>
          </ul>

          <span className="label">Find me on</span>
          <ul className="social-links">
            {socials.map(({ name, icon, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
