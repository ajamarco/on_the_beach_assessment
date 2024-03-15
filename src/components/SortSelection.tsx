import SortButton from "./SortButton";

const SortSelection = () => {
  return (
    <aside className="filters">
      <SortButton SortBy="Name" />
      <SortButton SortBy="Price" />
      <SortButton SortBy="Star Rating" />
    </aside>
  );
};

export default SortSelection;
