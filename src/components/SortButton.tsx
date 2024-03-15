import React from "react";

const SortButton = ({
  SortBy,
  active,
  clickHandler,
}: {
  SortBy: string;
  active: boolean;
  clickHandler: (SortBy: string) => void;
}) => {
  //creates function to handle the Click event
  const handleClick = () => {
    if (!active) clickHandler(SortBy);
  };

  return (
    <div
      className={active ? "sort__button sort__button__active" : "sort__button"}
      onClick={handleClick}
    >
      Sort by <span>{SortBy}</span>
    </div>
  );
};

export default SortButton;
