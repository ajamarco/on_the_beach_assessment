import React from "react";

const SortButton = ({ SortBy }: { SortBy: string }) => {
  return (
    <div className="filter">
      Sort by <span>{SortBy}</span>
    </div>
  );
};

export default SortButton;
