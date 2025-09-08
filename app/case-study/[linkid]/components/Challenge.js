import "./Challenge.css";

function Challenge({ data }) {
  const {
    challengeTitle,
    challengeBullets,
    challengeSummary,
    challengeImg1,
    challengeImg2,
    altChallenge1,
    altChallenge2,
    challengePreList,
    challenge
  } = data;

  return (
    <section className="challenge">
      <div className="container">
        <h2 className="challenge__title">{challenge}</h2>
        <h3 className="challenge__subtitle">{challengeTitle}</h3>

        <div className="challenge__descriptionWrapper">
          {data.challengePreList && (
            <p className="challenge__prelist">{data.challengePreList}</p>
          )}

          <ul className="challenge__list">
            {data.challengeBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {data.challengeSummary && (
            <p className="challenge__summary">{data.challengeSummary}</p>
          )}
        </div>

        <div className="challenge__media">
          <img
            src={challengeImg1}
            alt={altChallenge1}
            className="challenge__image"
          />
          <img
            src={challengeImg2}
            alt={altChallenge2}
            className="challenge__image"
          />
        </div>
      </div>
    </section>
  );
}

export { Challenge };
