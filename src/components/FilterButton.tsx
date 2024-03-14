import React from "react";

const FilterButton = ({ filter }: { filter: string }) => {
  return (
    <button className="filterButton">
      <p>
        Order By <span>{filter}</span>
      </p>
    </button>
  );
};

export default FilterButton;
