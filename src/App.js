import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, updateCounter] = useState(0);
  const increaseCounter = () => {
    updateCounter(counter + 1);
  };
  const decreaseCounter = () => {
    updateCounter(counter - 1);
  };
  const resetCounter = () => {
    updateCounter(0);
  };
  return (
    <div className="App">
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={resetCounter}>Reset</button>
      <p>{counter}</p>
    </div>
  );
}
