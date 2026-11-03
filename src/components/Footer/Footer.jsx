import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../data/socials.jsx";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Abdullah <span>Gamal</span>
            </a>
            <p>
              Content creator and digital marketing specialist helping brands
              grow with short-form video.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="footer-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>©2026 Abdullah Gamal. All rights reserved.</p>
          <ul className="footer-socials">
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
    </footer>
  );
}
