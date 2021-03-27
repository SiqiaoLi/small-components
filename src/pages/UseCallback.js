import { useState, useEffect, useCallback } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // only when number changes, the function will be excuted
  // useCallback return a function and useMemo just return a value
  const getItems = useCallback(
    (incrementor) => {
      return [number, number + incrementor, number + 2 + incrementor];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(3));
    console.log("update");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default UseCallback;
