import React, { useState } from "react";
import "../styles/CounterProgress.css";

function CounterProgress() {
  const [count, setCount] = useState(0);

  // increment & decrement logic
  const increment = () => setCount((prev) => Math.min(prev + 1, 10));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));

  // update count from slider
  const handleSliderChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="counter-progress-container">
      <h2>🔢 Counter with Progress Bar</h2>

      {/* Progress bar */}
      <input
        type="range"
        min="0"
        max="10"
        value={count}
        onChange={handleSliderChange}
        className="progress-bar"
      />

      {/* Counter section */}
      <div className="counter-controls">
        <button onClick={decrement} disabled={count === 0}>
          −
        </button>
        <span className="counter-value">{count}</span>
        <button onClick={increment} disabled={count === 10}>
          +
        </button>
      </div>

      <p className="progress-info">Progress: {count} / 10</p>
    </div>
  );
}

export default CounterProgress;
