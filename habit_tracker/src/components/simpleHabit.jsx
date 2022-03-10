import React, { useEffect, useRef, useState } from 'react';

const SimpleHabit = props => {
  const [count, setCount] = useState(0);
  const sapnRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  });

  return (
    <li className="habit">
      <span ref={sapnRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
