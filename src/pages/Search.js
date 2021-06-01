import { useState, useEffect } from "react";

function Search() {
  const data = [
    "My son lives in London.",
    "She plays basketball.",
    "He goes to football every day.",
    "He loves to play basketball.",
    "Does he go to school?",
    "It usually rains every day here.",
    "It smells very delicious in the kitchen.",
    "George brushes her teeth twice a day.",
    "He gets up early every day.",
    "They speak English in USA.",
  ];

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [count, setCount] = useState(0);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (input !== "") {
      const result = data.filter((sentence) =>
        sentence.toLowerCase().includes(input.toLowerCase())
      );
      setOutput(result);
      setCount(result.length);
    }
    return () => {
      setOutput([]);
      setCount(0);
    };
  }, [input]);

  return (
    <div className="App">
      <h2>Search</h2>
      <input type="text" value={input} onChange={handleInput} />
      <div>
        <br />
        <h4>{count}results</h4>
        <br />
        {output.map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </div>
      <div>
        <br />
        <h4>10 sentences</h4>
        <br />
        {data.map((sentence, index) => (
          <p key={index}>
            {index + 1}.{sentence}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
