const createEducation = (arr) => {
  return (
    <>
      {[...arr].reverse().map((course) => {
        return (
          <div className="cv-line education-card" key={course.id}>
            <p>
              <strong>{course.diploma}</strong>
            </p>
            <p>
              <span>{course.school}</span>
            </p>
            <p>
              <span id="cv-date">{`📍 ${course.location}`}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span id="cv-date">{course.year}</span>
            </p>
            <p></p>
          </div>
        );
      })}
    </>
  );
};

export default createEducation;
