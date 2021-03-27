import { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // 1. useMeno: only when number changes the doubleNumber will rerender
  // when theme changes the doubleNumber would not rerender
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // 2. useMeno: only when theme changes the style will be changed
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

const slowFunction = (number) => {
  console.log("calling function");
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
};

export default UseMemo;
