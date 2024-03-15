import { useState } from "react";

//import the css
import "../styles/TripCard.css";

interface TripCardProps {
  hotelName: string;
  hotelImage: string;
  hotelLocation: string;
  starRating: number;
  hotelOcupation: string;
  bookDate: string;
  bookPeriod: string;
  departingFrom: string;
  price: number;
  overview: string;
}

const TripCard = ({
  hotelName,
  hotelImage,
  hotelLocation,
  starRating,
  hotelOcupation,
  bookDate,
  bookPeriod,
  departingFrom,
  price,
  overview,
}: TripCardProps) => {
  const [showOverview, setShowOverview] = useState(false);
  return (
    <div className="trip">
      <div
        className="trip__image"
        style={{ backgroundImage: `url(${hotelImage})` }}
      >
        <button
          className="trip__button"
          onClick={() => setShowOverview(!showOverview)}
        >
          {showOverview
            ? "Read less about this hotel"
            : "Read more about this hotel"}
        </button>
      </div>
      <div className="trip__info">
        <h1>{hotelName}</h1>
        <span>{hotelLocation}</span>
        <p>XXXXX</p>
        <div className="trip__info__details">
          <p>{hotelOcupation}</p>
          <p>
            {bookDate} for {bookPeriod}
          </p>
          <p>departing from {departingFrom}</p>
        </div>
        <button className="trip__book_now">
          <p>Book Now</p>
          <h1>£{price}</h1>
        </button>
      </div>
      <div
        className={`trip__overview ${
          showOverview ? "trip__more_info" : "trip__more_info hide"
        }`}
      >
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default TripCard;
