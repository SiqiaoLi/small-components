import React from "react";

const CountLabel = ({ count }) => {
  const color = count > 10 ? "red" : "blue";
  return <span style={{ color }}>{count}</span>;
};

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <CountLabel count={count} />
        click
      </button>
    </div>
  );
};

export default Counter;
