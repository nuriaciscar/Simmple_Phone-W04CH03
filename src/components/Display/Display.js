import PropTypes from "prop-types";

const Display = ({ numbersDisplay }) => {
  return <span className="number">{numbersDisplay.join("")}</span>;
};

Display.propTypes = {
  text: PropTypes.string,
};

export default Display;
