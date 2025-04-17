import React from "react";
import manloiDrawing from "../assets/manloi-drawing.jpg";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <img
        className="manloi-image"
        alt="Manloi"
        src={manloiDrawing}
        width={"40%"}
      />
      <div>
        <p class="fs-1">Hi I am Manloi!</p>
        <br />
        <p>
          A junior front-end developer with experience in strategic
          communications and too many hobbies.
        </p>
        <a
          href="public/Manloi_Jim_CV_May25.pdf"
          download
          className="btn btn-outline-dark mt-3"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
