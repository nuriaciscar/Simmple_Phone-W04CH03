import PropTypes from "prop-types";

const Keyboard = ({ text, actionOnClick }) => {
  return (
    <ol className="keyboard">
      <li>
        <button className="key" actionOnClick={action}>
          1
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          2
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          3
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          4
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          5
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          6
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          7
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          8
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          9
        </button>
      </li>
      <li>
        <button className="key" actionOnClick={action}>
          0
        </button>
      </li>
      <li>
        <button className="key big" actionOnClick>
          delete
        </button>
      </li>
    </ol>
  );
};

Keyboard.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Keyboard;
