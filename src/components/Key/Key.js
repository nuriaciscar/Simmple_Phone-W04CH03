import PropTypes from "prop-types";

const Key = ({ text, actionOnClick, className }) => {
  return (
    <li>
      <button onClick={() => actionOnClick(text)} className={className}>
        {text}
      </button>
    </li>
  );
};

Key.propTypes = {
  text: PropTypes.string,
  actionOnClick: PropTypes.func,
};

export default Key;
