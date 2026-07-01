// Navigation Bar Section
import { useState } from "react";
import { MdHome } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#hero-section" className="navbar-item">
            <MdHome size={18} />
            Home
          </a>
        </li>

        <li>
          <a href="#about-me" className="navbar-item">
            About
          </a>
        </li>

        <li>
          <a href="#portfolio-section" className="navbar-item">
            Portfolio
          </a>
        </li>

        <li>
          <a href="#resume-section" className="navbar-item">
            Resume
          </a>
        </li>

        <li>
          <a href="#contact-section" className="navbar-item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;