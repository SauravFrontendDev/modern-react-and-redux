// import React from "react";

import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onRemove, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditSubmit = (newTitle, bookId) => {
    onEdit(newTitle, bookId);
    setShowEdit(false);
  };

  const content = showEdit ? (
    <BookEdit book={book} onEdit={handleEditSubmit} />
  ) : (
    <h3>{book.title}</h3>
  );
  return (
    <div className="book-show">
      <button className="edit-btn" onClick={() => setShowEdit((prev) => !prev)}>
        ✏️
      </button>
      <button className="remove-btn" onClick={(e) => onRemove(book.id)}>
        ✖️
      </button>
      <div>{content}</div>
    </div>
  );
};

export default BookShow;
