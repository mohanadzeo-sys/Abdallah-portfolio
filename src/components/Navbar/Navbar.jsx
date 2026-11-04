import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Abdullah <span>Gamal</span>
        </Link>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="nav-contact">
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <Link to="/contact" className="navbar-cta">
          Contact
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
