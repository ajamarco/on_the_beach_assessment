import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

interface TripCardProps {
  hotelName: string;
  hotelImage: string;
  hotelLocation: string;
  starRating: number;
  hotelOcupation: string;
  bookDate: string;
  bookPeriod: string;
  departingFrom: string;
  price: string;
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

  const renderOpenedOverview = () => {
    return (
      <>
        <p>
          <b>Read less</b> about this hotel
        </p>
        <FaChevronDown />
      </>
    );
  };

  const renderClosedOverview = () => {
    return (
      <>
        <p>
          <b>Read more</b> about this hotel
        </p>
        <FaChevronRight />
      </>
    );
  };

  return (
    <div className="trip">
      <div
        className="trip__image"
        style={{ backgroundImage: `url(${hotelImage})` }}
      >
        <button
          className="trip__show_overview"
          onClick={() => setShowOverview(!showOverview)}
        >
          {showOverview ? renderOpenedOverview() : renderClosedOverview()}
        </button>
      </div>
      <div className="trip__info">
        <h1>{hotelName}</h1>
        <span>{hotelLocation}</span>
        <p>
          {Array.from({ length: starRating }, (_, index) => (
            <GoStarFill color="#FEDC07" />
          ))}
        </p>
        <div className="trip__info__details">
          <p>{hotelOcupation}</p>
          <p>
            {bookDate} for {bookPeriod}
          </p>
          <p>departing from {departingFrom}</p>
        </div>
        <button className="trip__book_now">
          <p>Book Now</p>
          <h1>{price}</h1>
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
