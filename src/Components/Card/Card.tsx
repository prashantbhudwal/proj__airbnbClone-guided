import "./Card.css";

function Card({ guideData }: any) {
  let badgeText = "";
  if (guideData.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (guideData.location === "Online") {
    badgeText = "Online";
  }
  const badgeDiv = badgeText && <div className="img__label">{badgeText}</div>;

  return (
    <div className="card-container">
      <div className="card__img-container">
        <img
          src={`/src/assets/images/${guideData.coverImg}`}
          alt=""
          className="card__img"
        />
        {badgeDiv}
      </div>
      <div className="card__content">
        <div className="ratings-container">
          <div className="rating__starIcon"></div>
          <p className="star-rating">
            {guideData.stats.rating}
            <span className="ratings__quantity">
              ({guideData.stats.reviewCount})
            </span>
            <span className="dot">.</span>
            <span className="location">{guideData.location}</span>
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
