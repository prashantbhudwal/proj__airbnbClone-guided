import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <div className="card__img-container">
        <img
          src="/src/assets/images/katie-zaferes.png"
          alt=""
          className="card__img"
        />
        <div className="img__label">Sold Out</div>
      </div>
      <div className="card__content">
        <div className="ratings-container">
          <div className="rating__starIcon"></div>
          <p className="star-rating">
            5.0
            <span className="ratings__quantity">(6)</span>
            <span className="dot">.</span>
            <span className="location">USA</span>
          </p>
        </div>
        <h3 className="card__title">Life lessons with Kathie</h3>
        <div>
          <p className="card__price">
            <strong>From $138</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
