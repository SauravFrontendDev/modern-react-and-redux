// import React from "react";
import ProfileCard from "./ProfileCard";

import "bulma/css/bulma.css";

import alexaImg from "./assets/alexa.png";
import cortanaImg from "./assets/cortana.png";
import siriImg from "./assets/siri.png";

const App = () => {
  return (
    <div className="app">
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa987" image={alexaImg} />
      <ProfileCard title="siri" handle="@siri121" image={siriImg} />
      <ProfileCard title="cortana" handle="@45cortana" image={cortanaImg} />
    </div>
  );
};

export default App;
