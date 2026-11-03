import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../data/socials.jsx";

// formspree with email
// Formspree works almost the same as what I described for Web3Forms, so the handleSubmit outline from my last message still applies. The differences are in the setup and the request.

// Setup
// In your Formspree dashboard, click New Form and name it (for example “Portfolio contact”).
// Set the recipient email to Abdullah’s, since that’s where messages will be sent. Formspree may email that address to confirm it, so ask him to check his inbox, including spam, and confirm.
// Copy the form ID: the short code at the end of your endpoint URL, which looks like https://formspree.io/f/xxxxxxxx.
// Put the ID in your .env file so it’s easy to change later:
// VITE_FORMSPREE_ID=your_form_id

// You read it with import.meta.env.VITE_FORMSPREE_ID. Unlike Web3Forms, there’s no access key in the request body. The form ID in the URL identifies the form.

// What changes in the fetch call
// URL: https://formspree.io/f/${yourFormId}.
// Method: POST.
// Headers: Content-Type: application/json and Accept: application/json. The Accept header matters. Without it, Formspree treats the request like a normal HTML form post and tries to redirect to its own thank-you page instead of returning JSON.
// Body: JSON.stringify(formData), since your state object already has the right name, email, and message keys.
// Checking success: use res.ok, and console.log(await res.json()) once to see what a success and an error look like.

// The rest is the same as before: e.preventDefault(), a status state (idle, sending, success, error), try/catch for network failures, resetting formData on success, and a message under the button.

// Two things to check on Formspree’s side
// Free plan limits. One guide I found says 50 submissions a month on the free tier, but that may be outdated. Check your plan in the dashboard, since a busy portfolio could hit a limit.
// Spam protection. In the form’s settings, look for the spam and domain options, and check their docs for the hidden honeypot field. Turn on whatever fits once the site has a real domain.

const whatsappUrl = "https://wa.me/+201272745136";
export default function Contact() {
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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
            <button type="submit" className="form-btn" onClick={() => {}}>
              Send message
            </button>
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
