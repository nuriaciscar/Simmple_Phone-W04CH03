import PropTypes from "prop-types";
import Key from "../Key/Key";
import "./Keyboard.css";

import PhoneContext from "../Context/Context";
import { useContext } from "react";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const { numbersDisplay, setNumbersDisplay } = useContext(PhoneContext);

  console.log(numbersDisplay);

  const addNumber = (text) => {
    if (numbersDisplay.length < 9) {
      setNumbersDisplay([...numbersDisplay, text]);
      console.log(numbersDisplay);
    }
  };

  const deleteNumber = (text) => {
    setNumbersDisplay([...numbersDisplay].slice(0, -1));
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number, i) => (
          <Key
            key={i}
            className="key"
            text={number}
            actionOnClick={(number) => addNumber(number)}
          />
        ))}
        <Key className="key big" text="Delete" actionOnClick={deleteNumber} />
      </ol>
    </div>
  );
};

Keyboard.propTypes = {
  number: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Keyboard;
