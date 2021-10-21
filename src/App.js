import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import PhoneContext from "./components/Context/Context";
import { useState } from "react";
import Display from "./components/Display/Display";

function App() {
  const [numbersDisplay, setNumbersDisplay] = useState([]);

  return (
    <PhoneContext.Provider value={{ numbersDisplay, setNumbersDisplay }}>
      <div className="container">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <span className="message">Calling...</span>
        <main className="phone">
          <Keyboard />

          <div className="actions">
            <Display numbersDisplay={numbersDisplay} />
            {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número  tiene 9 cifras --> */}
            <a href="call" className="call">
              Call
            </a>
            {/* <!-- Sólo se tiene que ver un botón u otro --> */}
            <a href="hang active" className="hang active">
              Hang
            </a>
          </div>
        </main>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
