import React from "react";

const Counter = ({ count, addCounter, minusCounter }) => {
  return (
    <div className="counter">
      <div className="counter-inner">
        <button onClick={minusCounter}>-</button>
        <div className="count">{count}</div>
        <button onClick={addCounter}>+</button>
      </div>
    </div>
  );
};

export default Counter;
