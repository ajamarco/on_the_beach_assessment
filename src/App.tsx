import { useState } from "react";
import "./App.css";
import SortSelection from "./components/SortSelection";
import Trips from "./components/Trips";
import FilterTest from "./components/test/FilterTest";
import TripsTest from "./components/test/TripsTest";
import image1 from "../src/assets/hotel-image-1.png";
import TripCard from "./components/TripCard";

function App() {
  //create a state to hold the sort value for hotels. Hotels can be sorted by name, price or star rating
  const [sortValue, setSortValue] = useState("Name");

  const handleSortChange = (sortBy: string) => {
    setSortValue(sortBy);
  };

  return (
    <div className="container">
      <SortSelection
        activeSort={sortValue}
        handleSortChange={handleSortChange}
      />
      <Trips sortBy={sortValue} />
    </div>
  );
}

export default App;
