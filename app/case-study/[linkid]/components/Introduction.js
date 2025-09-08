import './Introduction.css';

function Introduction({ data }) {
  const { descriptionIntroduction, gifIntroduction, altIntroduction, introduction } = data;

  return (
    <section className="introduction">
      <div className="container">
        <h2 className="introduction__title">{introduction}</h2>
        <div className="introduction__descriptionWrapper">
        <p className="introduction__description">{descriptionIntroduction}</p>
        </div>
        <div className="introduction__media">

            <div className="introduction__gifWrapper">
              <img
                src={gifIntroduction}
                title={altIntroduction}
               
                className="introduction__gif"
              />
            </div>
         
        </div>
      </div>
    </section>
  );
}

export { Introduction };
