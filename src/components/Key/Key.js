import PropTypes from "prop-types";

const Key = ({ text, actionOnClick }) => {
  return (
    <li>
      <button onClick={actionOnClick} className="key">
        {text}
      </button>
    </li>
  );
};

Key.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Key;
