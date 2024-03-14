import { useState } from "react";

//import image from src\assets\hotel-image-1.png
import image1 from "../assets/hotel-image-1.png";

//import the css
import "../styles/TripCard.css";

const TripCard = () => {
  const [showOverview, setShowOverview] = useState(false);
  return (
    <div className="trip_card">
      <section className="hotel_info">
        <div
          className="hotel_image"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <button
            className="button_more_info"
            onClick={() => setShowOverview(!showOverview)}
          >
            <b>{showOverview ? "Read less" : "Read more"}</b> about this hotel
          </button>
        </div>{" "}
        <div className="hotel_details">
          <h2>IberoStar</h2>
          <p>Tenerife</p>
          <p>Star Rating</p>
          <div className="hotel_more_info">
            <p>2 Adults, 2 Children & 1 infant</p>
            <p>3rd July 2019 for 7 days</p>
            <p>Departing from East Midlands</p>
          </div>
          <button className="button_book">
            <p>Book now</p>
            <h1>£ 3,123.25</h1>
          </button>
        </div>
      </section>
      <section
        className={showOverview ? "hotel_overview" : "hotel_overview hide"}
      >
        <h3>Overview</h3>
        <p className="hotel_overview_details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec mollis hendrerit risus eu posuere.
        </p>
      </section>
    </div>
  );
};

export default TripCard;
