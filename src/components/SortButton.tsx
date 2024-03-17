import "../styles/SortButton.scss";

const SortButton = ({
  SortBy,
  active,
  clickHandler,
  icon,
}: {
  SortBy: string;
  active: boolean;
  clickHandler: (SortBy: string) => void;
  icon?: JSX.Element;
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
      <p>
        Sort by <span>{SortBy}</span>
      </p>
      {icon}
    </div>
  );
};

export default SortButton;
