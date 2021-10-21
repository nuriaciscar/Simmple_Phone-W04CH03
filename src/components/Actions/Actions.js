import Action from "../Action/Action";
import PhoneContext from "../Context/Context";
import { useContext } from "react";

const Actions = () => {
  const { numbersDisplay, setNumbersDisplay } = useContext(PhoneContext);

  const callAction = () => {
    if (numbersDisplay.length < 9) {
    }
  };
  return (
    <>
      <Action
        href={"Call"}
        text={"Call"}
        className={"Call"}
        actionOnClick={callAction}
      />

      <Action
        href={"Hang"}
        text={"Hang"}
        className={"Hang"}
        actionOnClick={action}
      />
    </>
  );
};

export default Actions;
