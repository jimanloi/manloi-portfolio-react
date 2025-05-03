import React from "react";
import manloiDrawing from "../assets/manloi-drawing.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-auto sticky-top">
      <div className="container">
        <a href="https://jimanloi.github.io/manloi-portfolio-react/">
          <img
            border="0"
            alt="Manloi"
            src={manloiDrawing}
            width="60"
            height="60"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Hi there!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career-journey">
                My Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/works">
                My Projects
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact Me
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
