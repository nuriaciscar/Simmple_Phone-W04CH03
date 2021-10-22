import Action from "../Action/Action";
import PhoneContext from "../Context/Context";
import { useContext } from "react";

import "./Actions.css";
import Display from "../Display/Display";
import App from "../../App";

const Actions = () => {
  const { numbersDisplay, setNumbersDisplay, displayCall, setDisplayCall } =
    useContext(PhoneContext);

  const callAction = (e) => {
    e.preventDefault();
    if (numbersDisplay.length === 9) {
      setDisplayCall(true);
      setTimeout(() => {
        setDisplayCall(false);
      }, 5000);
    }
  };

  const hangAction = () => {
    setDisplayCall(false);
  };

  return (
    <>
      <div className="actions">
        <Display numbersDisplay={numbersDisplay} />
        {!displayCall ? (
          <Action
            href={"Call"}
            text={"Call"}
            className={numbersDisplay.length === 9 ? "active call" : "call"}
            actionOnClick={callAction}
            disabled={true}
          />
        ) : (
          <Action
            href={"Hang"}
            text={"Hang"}
            className={displayCall ? "active hang" : "off"}
            actionOnClick={hangAction}
          />
        )}
      </div>
    </>
  );
};

export default Actions;
