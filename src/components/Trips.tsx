import TripCard from "./TripCard";
import hotel1Image from "../assets/hotel-image-1.png";
import hotel2Image from "../assets/hotel-image-2.png";
import hotel3Image from "../assets/hotel-image-3.png";

const Trips = () => {
  //set the hotel list to be used. This could be replace with an API call in the future
  const hotelList = [
    {
      hotelId: 1,
      hotelName: "Iberostar Grand Salome",
      hotelImage: hotel1Image,
      hotelLocation: "Costa Adeje, Tenerife",
      starRating: 5,
      hotelOcupation: "2 adults, 2 children & 1 infant",
      bookDate: "3rd July 2019",
      bookPeriod: "7 days",
      departingFrom: "East Midlands",
      price: 1136.5,
      overview:
        "The Iberostart Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups why are looking for a holiday full of sport, sun and sea.",
    },
    {
      hotelId: 2,
      hotelName: "Aguamarina Golf Hotel",
      hotelImage: hotel2Image,
      hotelLocation: "Costa Adeje, Tenerife",
      starRating: 4,
      hotelOcupation: "2 adults, 1 child",
      bookDate: "3rd July 2019",
      bookPeriod: "7 days",
      departingFrom: "Liverpool",
      price: 696.8,
      overview:
        "The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups why are looking for a holiday full of sport, sun and sea.",
    },
    {
      hotelId: 3,
      hotelName: "Las Piramides Resort",
      hotelImage: hotel3Image,
      hotelLocation: "Costa Adeje, Tenerife",
      starRating: 3,
      hotelOcupation: "2 adults, 2 children",
      bookDate: "3rd July 2019",
      bookPeriod: "7 days",
      departingFrom: "Manchester",
      price: 499.99,
      overview:
        "The Las Piramides Resort has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups why are looking for a holiday full of sport, sun and sea.",
    },
  ];

  return (
    <div className="trips">
      {hotelList.map((hotel) => (
        <TripCard
          key={hotel.hotelId}
          hotelName={hotel.hotelName}
          hotelImage={hotel.hotelImage}
          hotelLocation={hotel.hotelLocation}
          starRating={hotel.starRating}
          hotelOcupation={hotel.hotelOcupation}
          bookDate={hotel.bookDate}
          bookPeriod={hotel.bookPeriod}
          departingFrom={hotel.departingFrom}
          price={hotel.price}
          overview={hotel.overview}
        />
      ))}
    </div>
  );
};

export default Trips;
