import React from "react";
import manloiDrawing from "../assets/manloi-drawing.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-auto sticky-top">
      <div class="container">
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
