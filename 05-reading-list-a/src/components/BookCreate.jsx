// import React from "react";

import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="input"
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
