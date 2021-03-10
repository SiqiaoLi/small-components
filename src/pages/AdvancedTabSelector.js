import React, { useState } from "react";
import PropTypes from "prop-types";

const AdvancedTabSelector = ({ value, options, onChange, children }) => {
  return (
    <div className="tab-selector">
      <ul>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`tab-item ${opt.value === value ? "selected" : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.name}
          </li>
        ))}
      </ul>
      {value && children(value)}
    </div>
  );
};

AdvancedTabSelector.prototype = {
  value: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func,
  children: PropTypes.func,
};

export default AdvancedTabSelector;

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" },
];

const animals = [
  { name: "Tiger", value: "tiger" },
  { name: "Elephant", value: "elephant" },
  { name: "Cow", value: "cow" },
];

export const AdvancedTabSelectorSample = () => {
  const [color, setColor] = useState(null);
  const [animal, setAnimal] = useState(null);
  return (
    <div>
      <h3>Select color: </h3>
      <AdvancedTabSelector
        options={colors}
        value={color}
        onChange={(c) => setColor(c)}
      >
        {(color) => (
          <span
            style={{
              display: "inline-block",
              backgroundColor: color,
              width: "40px",
              height: "40px",
            }}
          />
        )}
      </AdvancedTabSelector>
      <h3>Select animal: </h3>
      <AdvancedTabSelector
        options={animals}
        value={animal}
        onChange={(a) => setAnimal(a)}
      >
        {(animal) => (
          <img width="100px" src={require(`../../images/${animal}.png`)} />
        )}
      </AdvancedTabSelector>
    </div>
  );
};
