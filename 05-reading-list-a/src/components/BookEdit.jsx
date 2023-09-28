// import React from "react";

import { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSubmitNewTitle = (e) => {
    e.preventDefault();
    onEdit(newTitle, book.id);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmitNewTitle}>
      <label htmlFor="new-title">New Title</label>
      <input type="text" value={newTitle} onChange={handleNewTitle} />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookEdit;
