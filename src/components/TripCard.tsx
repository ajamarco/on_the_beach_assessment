import { useState } from "react";

//import image from src\assets\hotel-image-1.png
import image1 from "../assets/hotel-image-1.png";

//import the css
import "../styles/TripCard.css";

const TripCard = () => {
  const [showOverview, setShowOverview] = useState(false);
  return (
    <div className="trip">
      <div
        className="trip__image"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <button
          className="trip__button"
          onClick={() => setShowOverview(!showOverview)}
        >
          Read more about this hotel
        </button>
      </div>
      <div className="trip__info">
        <h1>Iberostar</h1>
        <span>Tenerife</span>
        <p>XXXXX</p>
        <div className="trip__info__details">
          <p>2 adults, 2 children & 1 infant</p>
          <p>3rd July 2019 for 7 days</p>
          <p>departing from East Midlands</p>
        </div>
        <button className="trip__book_now">
          <p>Book Now</p>
          <h1>£1,200.00</h1>
        </button>
      </div>
      <div
        className={`trip__overview ${
          showOverview ? "trip__more_info" : "trip__more_info hide"
        }`}
      >
        <p>
          this is more text about the hotelthis is more text about the hotelthis
          is more text about the hotelthis is more text about the hotelthis is
          more text about the hotel
        </p>
      </div>
    </div>
  );
};

export default TripCard;
