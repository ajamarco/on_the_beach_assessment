import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/Filter";
import Trips from "./components/Trips";

function App() {
  return (
    <div className="container">
      <Filter />
      <Trips />
    </div>
  );
}

export default App;
