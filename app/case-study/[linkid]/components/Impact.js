import "./Impact.css";

function Impact({ data }) {
  const {
    impactTitle,
    impactBullets,
    impactSummary,
    impactPreList,
    impactResults
  } = data;

  return (
<section className="impact">
  <div className="container">
    <div className="impact__box">
      <div className="impact__content">
        <h2 className="impact__title">{impactResults}</h2>
        <h3 className="impact__subtitle">{impactTitle}</h3>

        <div className="impact__descriptionWrapper">
          {impactPreList && (
            <p className="impact__prelist">{impactPreList}</p>
          )}

          <ul className="impact__list">
            {impactBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {impactSummary && (
            <p className="impact__summary">{impactSummary}</p>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

  
  );
}

export { Impact };
