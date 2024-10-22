import { useState } from "react";
import './App.css';

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={(e) => clickHandler(e, label)} className={className}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="Display">
      {value}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");

  const clickHandler = (e, value) => {
    e.preventDefault();
    
    const items = [
      "Having A Strong Work Ethic",
      "Being On Time",
      "Making An Effort",
      "Being High Energy",
      "Having A Positive Attitude",
      "Being Passionate",
      "Using Good Body Language",
      "Being Coachable",
      "Doing A Little Extra",
      "Being Prepared"
    ];

    if (value === "Reset") {
      setDisplayValue("10 Things That Require Zero Talent");
    } else if (value === "Deloria") {
      setDisplayValue("Jordan Micko Deloria");
    } else if (!isNaN(value)) {
      const index = parseInt(value);
      if (index >= 0 && index < items.length) {
        setDisplayValue(items[index]);
      }
    }
  };

  return (
    <div className="App">
      <h1 className="Head">Jordan Micko Deloria - BSIT 3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display value={displayValue} />
        </div>

        <div className="Buttons">
          <Key label={7} clickHandler={clickHandler} />
          <Key label={8} clickHandler={clickHandler} />
          <Key label={9} clickHandler={clickHandler} />
          <Key label={4} clickHandler={clickHandler} />
          <Key label={5} clickHandler={clickHandler} />
          <Key label={6} clickHandler={clickHandler} />
          <Key label={1} clickHandler={clickHandler} />
          <Key label={2} clickHandler={clickHandler} />
          <Key label={3} clickHandler={clickHandler} />
          <Key label={"Reset"} clickHandler={clickHandler} className="DeloriaButton" />
          <Key label={0} clickHandler={clickHandler} />
          <Key label={"Deloria"} clickHandler={clickHandler} className="DeloriaButton" />
        </div>
      </div>
    </div>
  );
}

export default App;

