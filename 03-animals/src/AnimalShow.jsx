// import React from "react";
import "./AnimalShow.css";

import { useState } from "react";
import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import heart from "./assets/heart.svg";
import horse from "./assets/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ name }) => {
  const [count, setCount] = useState(1);
  const handleClicks = () => {
    setCount((c) => c + 1);
  };
  return (
    <div onClick={handleClicks} className="animal-show">
      <img className="animal" src={svgMap[name]} alt={name} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{
          width: 20 + 20 * count + "px",
        }}
      />
      <h4>{name}</h4>
    </div>
  );
};

export default AnimalShow;
