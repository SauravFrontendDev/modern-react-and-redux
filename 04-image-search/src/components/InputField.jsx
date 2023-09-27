import React, { useState } from "react";

const InputField = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default InputField;
