import "./Card.css";

function Card({ guideData }: any) {
  return (
    <div className="card-container">
      <div className="card__img-container">
        <img
          src={`/src/assets/images/${guideData.img}`}
          alt=""
          className="card__img"
        />
        <div className="img__label">Sold Out</div>
      </div>
      <div className="card__content">
        <div className="ratings-container">
          <div className="rating__starIcon"></div>
          <p className="star-rating">
            {guideData.rating}
            <span className="ratings__quantity">({guideData.reviewCount})</span>
            <span className="dot">.</span>
            <span className="location">{guideData.country}</span>
          </p>
        </div>
        <h3 className="card__title">{guideData.title}</h3>
        <div>
          <p className="card__price">
            <strong>From ${guideData.price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
