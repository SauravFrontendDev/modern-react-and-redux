// import React from "react";

import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

console.log(getRandomAnimal());
const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals((a) => [...a, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((a, i) => (
          <AnimalShow name={a} key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
