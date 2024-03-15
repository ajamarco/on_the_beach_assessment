import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SortSelection from "./components/SortSelection";
import Trips from "./components/Trips";
import FilterTest from "./components/test/FilterTest";
import TripsTest from "./components/test/TripsTest";
import image1 from "../src/assets/hotel-image-1.png";
import TripCard from "./components/TripCard";

function App() {
  return (
    <div className="container">
      <SortSelection />
      <div className="trips">
        <TripCard />
        <TripCard />
      </div>
    </div>
  );
}

export default App;
