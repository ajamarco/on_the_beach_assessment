//import image from src\assets\hotel-image-1.png
import image1 from "../assets/hotel-image-1.png";

//import the css
import "../styles/TripCard.css";

const TripCard = () => {
  return (
    <div className="trip_card">
      <section className="hotel_info">
        <img src={image1} alt="hotel" />
        <h2>Hotel Name</h2>
        <p>Price</p>
        <p>Star Rating</p>
      </section>
      <section className="hotel_overview">
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec mollis hendrerit risus eu posuere.
        </p>
      </section>
    </div>
  );
};

export default TripCard;
