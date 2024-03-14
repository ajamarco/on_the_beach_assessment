import FilterButton from "./FilterButton";

const Filter = () => {
  return (
    <aside className="filters">
      <FilterButton filter="hotel name" />
      <FilterButton filter="price" />
      <FilterButton filter="star rating" />
    </aside>
  );
};

export default Filter;
