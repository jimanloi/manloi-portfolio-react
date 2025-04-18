import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="social-media">
        <a href="https://github.com/jimanloi">
          <i
            class="bi bi-github"
            style={{ color: "black", fontSize: "20px" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/manloij/">
          <i
            class="bi bi-linkedin"
            style={{ color: "black", fontSize: "20px" }}
          ></i>
        </a>
        <a href="https://www.instagram.com/jmseastheday/">
          <i
            class="bi bi-instagram"
            style={{ color: "black", fontSize: "20px" }}
          ></i>
        </a>
      </div>
      <div className="copyright">
        <small>© designed & built by Manloi Jim with React</small>
      </div>
    </div>
  );
};

export default Footer;
