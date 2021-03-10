import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    var timerID = setInterval(() => {
      tick();
    }, 1000);
    // and componentWillUnmount
    return () => {
      clearInterval(timerID);
    };
  }, [date]);

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
