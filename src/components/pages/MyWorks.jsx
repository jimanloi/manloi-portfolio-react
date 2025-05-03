import projects from "../../data/projectData";
import { motion } from "motion/react";

const MyWorks = () => {
  return (
    <div className="works">
      <h1>My Works</h1>
      <div className="projects-container">
        {[...projects].reverse().map((project) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="project-card"
              key={project.id}
            >
              <h4>{project.title}</h4>
              <img src={project.screenshot} alt={project.title} />
              <p>{project.description}</p>
              <p className="tags-container">
                {project.tags.map((element, index) => {
                  return (
                    <span className="tags" key={index}>
                      {element}
                    </span>
                  );
                })}
              </p>
              <p>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.site !== "" ? "view project" : ""}
                </a>{" "}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.source !== "" ? "source code" : ""}
                </a>
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
