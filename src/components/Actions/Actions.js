import Action from "../Action/Action";
import PhoneContext from "../Context/Context";
import { useContext } from "react";

import "./Actions.css";
import Display from "../Display/Display";
import App from "../../App";

const Actions = () => {
  const { numbersDisplay, setNumbersDisplay, displayCall, setDisplayCall } =
    useContext(PhoneContext);

  const callAction = () => {
    setDisplayCall(true);
  };

  return (
    <>
      <div className="actions">
        <Display numbersDisplay={numbersDisplay} />
        <Action
          href={"Call"}
          text={"Call"}
          className={numbersDisplay.length === 9 ? "active call" : "call"}
          actionOnClick={callAction}
        />

        <Action href={"Hang"} text={"Hang"} className={"off"} />
      </div>
    </>
  );
};

export default Actions;
