import React, { useState } from "react";

function App() {
  setInterval(showTime, 1000);

  let latestTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(latestTime);
  console.log(time);

  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
