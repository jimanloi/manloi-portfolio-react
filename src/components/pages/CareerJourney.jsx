import manloiDeveloper from "../../assets/manloi_developer.png";
import manloiMountain from "../../assets/manloi_mountain.jpg";
import manloiConference from "../../assets/manloi_un.jpg";
import manloiUN from "../../assets/manloi_un2.jpg";
import createCV from "./createCV";
import career from "../../data/careerData";
import createEducation from "./createEducation";
import { education, training } from "../../data/educationData";
import createTraining from "./createTraining";

const CareerJourney = () => {
  return (
    <div className="journey-section">
      <div className="alert alert-warning" role="alert">
        <h6>
          🎯 Currently seeking a junior front-end developer role in Belgium.
        </h6>
      </div>

      <div className="self-intro">
        <p style={{ marginBottom: "2rem" }}>
          I'm Manloi, a junior Front-End Developer. I’m nearing the end of a
          5-month intensive front-end course and looking for my{" "}
          <strong>
            first professional opportunity in web development starting July 2025
          </strong>
          .
        </p>
        <h5>No, I haven’t always been an "IT person" 🤓</h5>
        <p>
          I wrote my first line of code in November 2024 during a one-month
          Python course, and <em>I loved it</em>. I love the thinking process,
          building logic, turning lines of code into something visual, and the
          incredible satisfaction when a program runs successfully.
        </p>
        <p>
          Since January 2025, I’ve been learning
          <strong> HTML, CSS, JavaScript, and React</strong> through an
          intensive course with{" "}
          <a
            href="https://www.bruxellesformation.brussels/catalogue-dorifor/front-end-developer-hack-your-future-en-anglais/"
            className="link-secondary"
          >
            Bruxelles Formation/HackYourFuture Belgium
          </a>
          , and I really enjoy building user interfaces and making things come
          to life on the screen. I’m mostly self-taught and learning every day,
          and that’s honestly the best part.
        </p>
        <p>
          <strong>My career path isn't typical for a developer</strong>, but my
          background in digital communications, media research, and operations
          has made me tech-savvy and helped me grasp programming concepts
          quickly.
        </p>
        <p>
          I’ve worked at a UN agency, a climate-focused foundation, and in the
          private sector. Scroll down to learn more! ⬇️⬇️
        </p>
      </div>
      <div className="career-images">
        <img src={manloiMountain} alt="manloi" className="secondaryPhoto" />
        ⚯
        <img src={manloiUN} alt="manloi" className="secondaryPhoto" />
        ⚯
        <img src={manloiDeveloper} alt="manloi" className="developer-icon" />
      </div>
      <div className="experience-section">
        <h2>Work Experience</h2>
        <div className="cv">{createCV(career)}</div>
        <a
          href="Manloi_Jim_CV_May25.pdf"
          download
          className="btn btn-outline-dark"
          style={{ maxWidth: 500, alignSelf: "center", marginTop: 20 }}
        >
          Download My CV
        </a>
      </div>
      <div className="experience-section">
        <h2>Education & Professional Training</h2>
        {createEducation(education)}
        {createTraining(training)}
      </div>
      <div className="experience-section">
        <h2>Skills</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" key="languages">
            <strong>Languages</strong>
            <p>HTML • CSS • JavaScript • TypeScript • Python</p>
          </li>
          <li className="list-group-item" key="Frameworks">
            <strong>Frameworks & Libraries</strong>
            <p>React • Vite • Bootstrap • Motion • Jest</p>
          </li>
          <li className="list-group-item" key="Tools">
            <strong>Tools & Systems</strong>
            <p>GitHub • npm • VSCode • PyCharm</p>
          </li>
          <li className="list-group-item" key="api">
            <strong>API Integration</strong>
            <p>Fetch API • REST API</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerJourney;
