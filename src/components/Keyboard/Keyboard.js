import PropTypes from "prop-types";

const Keyboard = ({ text, actionOnClick }) => {
  return (
    <button onClick={actionOnClick} className="key">
      {text}
    </button>
  );
};

Keyboard.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Keyboard;
