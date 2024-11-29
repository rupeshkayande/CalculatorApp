// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  // Handle button click event
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle calculation when '=' is clicked
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // eval calculates the expression
    } catch (error) {
      setInput('Error');
    }
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Increment by 2 function
  const handleIncrementBy2 = () => {
    const currentValue = parseFloat(input) || 0; // if input is not a number, default to 0
    setInput((currentValue + 2).toString());
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
        
        {/* Advanced Features */}
        <button onClick={handleIncrementBy2}>+2</button>
      </div>
    </div>
  );
};

export default App;
