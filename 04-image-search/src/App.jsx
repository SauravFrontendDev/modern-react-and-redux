import React from "react";
import InputField from "./components/InputField";

const handleSubmit = (term) => {
  console.log("Search with " + term);
};

const App = () => {
  return (
    <div>
      <InputField onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
