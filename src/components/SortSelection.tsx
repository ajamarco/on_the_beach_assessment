import SortButton from "./SortButton";
import { MdSortByAlpha } from "react-icons/md";
import { AiFillPoundCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

import "../styles/SortSelection.css";

const SortSelection = ({
  activeSort,
  handleSortChange,
}: {
  activeSort: string;
  handleSortChange: (sortBy: string) => void;
}) => {
  const sortOptions = ["Name", "Price", "Star Rating"];

  const selectIcon = (sortOption: string): JSX.Element => {
    switch (sortOption) {
      case "Name":
        return <MdSortByAlpha />;
      case "Price":
        return <AiFillPoundCircle />;
      case "Star Rating":
        return <FaStar />;
      default:
        return <MdSortByAlpha />;
    }
  };

  return (
    <aside className="sort_selection">
      {sortOptions.map((option, index) => (
        <SortButton
          SortBy={option}
          key={index}
          active={option === activeSort}
          clickHandler={(sortBy) => handleSortChange(sortBy)}
          icon={selectIcon(option)}
        />
      ))}
    </aside>
  );
};

export default SortSelection;
