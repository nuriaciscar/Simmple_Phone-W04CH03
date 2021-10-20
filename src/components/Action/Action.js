import PropTypes from "prop-types";

const Action = ({ href, text, className, actionOnClick }) => {
  return (
    <a href={href} className={className} onClick={actionOnClick}>
      {text}
    </a>
  );
};

Action.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};

export default Action;
