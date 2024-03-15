import { useState } from "react";
import "./App.css";
import SortSelection from "./components/SortSelection";
import Trips from "./components/Trips";

function App() {
  //create a state to hold the sort value for hotels. Hotels can be sorted by name, price or star rating
  const [sortValue, setSortValue] = useState("Name");

  const handleSortChange = (sortBy: string) => {
    setSortValue(sortBy);
  };

  return (
    <main className="container">
      <SortSelection
        activeSort={sortValue}
        handleSortChange={handleSortChange}
      />
      <Trips sortBy={sortValue} />
    </main>
  );
}

export default App;
