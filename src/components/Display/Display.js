import PropTypes from "prop-types";

const Display = ({ text }) => {
  return <span className="number">{text}</span>;
};

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
