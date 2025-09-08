import "./Solution.css";

function Solution({ data }) {
  const {
    solutionTitle,
    solutionBullets,
    solutionSummary,
    solutionPreList,
    solution
  } = data;

  return (
    <section className="solution">
      <div className="container">
        <h2 className="solution__title">{solution}</h2>
        <h3 className="solution__subtitle">{solutionTitle}</h3>

        <div className="solution__descriptionWrapper">
          {data.solutionPreList && (
            <p className="solution__prelist">{data.solutionPreList}</p>
          )}

          <ul className="solution__list">
            {data.solutionBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {data.solutionSummary && (
            <p className="solution__summary">{data.solutionSummary}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export { Solution };
