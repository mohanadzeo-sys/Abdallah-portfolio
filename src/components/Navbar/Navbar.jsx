import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container navbar-inner">
        <a href="#home" className="navbar-logo">
          Abdullah <span>Gamal</span>
        </a>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Projects
            </a>
          </li>

          <li className="nav-contact">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <a href="#contact" className="navbar-cta">
          Contact
        </a>

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
