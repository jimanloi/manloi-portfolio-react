import React from "react";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div>
        <h1 className="greeting">Hi I am Manloi!</h1>
        <br />
        <h4>A junior front-end developer based in Brussels, Belgium.</h4>
        <br />
        <a
          href="Manloi_Jim_CV_May25.pdf"
          download
          className="btn btn-outline-dark"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
