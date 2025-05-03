const createCV = (career) => {
  return (
    <>
      {[...career].reverse().map((job) => {
        return (
          <div className="cv-line" key={job.id}>
            <p className="cv-company">
              <strong>{job.company}</strong>
            </p>
            <p className="cv-title">{job.title}</p>
            <p>
              <span id="cv-date">{`📍 ${job.location}`}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span id="cv-date">{` ${job.start} - ${job.end}`}</span>
            </p>
            <p>
              {job.tags.map((tag, i) => {
                return (
                  <span className="cv-tags" key={`${job.id}-${i}`}>
                    {tag}
                  </span>
                );
              })}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default createCV;
