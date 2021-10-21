import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import PhoneContext from "./components/Context/Context";
import { useState } from "react";
import Actions from "./components/Actions/Actions";

function App() {
  const [numbersDisplay, setNumbersDisplay] = useState([]);
  const [displayCall, setDisplayCall] = useState(false);

  return (
    <PhoneContext.Provider
      value={{ numbersDisplay, setNumbersDisplay, displayCall, setDisplayCall }}
    >
      <div className="container">
        <span className={displayCall ? "message" : "off"}>Calling...</span>
        <main className="phone">
          <Keyboard />

          <Actions />
        </main>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
