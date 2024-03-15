import SortButton from "./SortButton";

const SortSelection = ({
  activeSort,
  handleSortChange,
}: {
  activeSort: string;
  handleSortChange: (sortBy: string) => void;
}) => {
  const sortOptions = ["Name", "Price", "Star Rating"];
  return (
    <aside className="filters">
      {sortOptions.map((option, index) => (
        <SortButton
          SortBy={option}
          key={index}
          active={option === activeSort}
          clickHandler={(sortBy) => handleSortChange(sortBy)}
        />
      ))}
    </aside>
  );
};

export default SortSelection;
