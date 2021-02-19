import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>Clock</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
