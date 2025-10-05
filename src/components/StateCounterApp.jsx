import React, { useState } from "react";
import "../styles/StateCounterApp.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button className="btn" onClick={increment}>+ Increment</button>
        <button className="btn" onClick={decrement} disabled={count === 0}>
          - Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;