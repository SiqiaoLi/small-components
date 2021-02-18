import { useState } from "react";
import "./TabSelector.css";

const TabSelector = () => {
  const [color, setColor] = useState(null);

  return (
    <div>
      Select color:
      <TabSelectorInside
        options={options}
        color={color}
        onChange={(c) => setColor(c)}
      />
    </div>
  );
};

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" },
];

const TabSelectorInside = ({ options, color, onChange }) => {
  return (
    <div className="tab-selector">
      <ul>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`tab-item ${opt.value === color ? "selected" : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSelector;
