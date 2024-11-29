import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle evaluation of the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());  // Use eval to evaluate the expression
    } catch (error) {
      setInput("Error");
    }
  };

  // Handle clear input
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-screen">
          <input type="text" value={input} readOnly />
        </div>
        <div className="calculator-buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
