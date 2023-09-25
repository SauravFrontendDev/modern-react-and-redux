// import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        <h2>Count is : {count}</h2>
        <AnimalShow />
      </div>
    </div>
  );
};

export default App;
