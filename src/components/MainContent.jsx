import React from "react";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1 style={{ paddingBottom: "10px" }}>About Me</h1>
      <p>
        I’m Manloi, currently diving into the world of
        <strong> front-end development</strong> after a few years working in
        digital comms and coordination for international organizations. My time
        managing website content and supporting international teams made me
        realize how much I enjoy problem-solving and creating things that look
        good and work well.
      </p>
      <p>
        Now I’m learning to build clean, responsive interfaces with{" "}
        <mark>HTML, CSS, JavaScript, and React</mark> through the{" "}
        <a class="link-underline-info" href="https://www.hackyourfuture.be/">
          Hack Your Future Belgium program
        </a>
        . I also love learning new tools like{" "}
        <mark>Figma, TypeScript, and APIs</mark> — basically anything that helps
        bring great ideas to life on screen.
      </p>
      <p>
        <strong>Outside of coding...</strong>I love anything that gets me
        outdoors{" "}
        <small>(long hikes, scuba diving, freediving, running, sailing)</small>{" "}
        and anything that keeps my hands busy{" "}
        <small>
          (sourdough bread baking, specialty coffee hand brewing, analog
          photography, acrylic painting, pottery)
        </small>
        . I’m always curious to learn and create, whether it’s with code or
        clay.
      </p>
    </div>
  );
};

export default MainContent;
