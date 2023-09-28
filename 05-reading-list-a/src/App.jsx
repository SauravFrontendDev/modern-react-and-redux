import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (newTitle) => {
    const updatedBooks = [
      ...books,
      { id: crypto.randomUUID(), title: newTitle },
    ];
    setBooks(updatedBooks);
  };

  const handleRemoveBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleTitleUpdate = (updatedTitle, bookId) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, title: updatedTitle } : book
    );
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList
        books={books}
        onRemove={handleRemoveBook}
        onEdit={handleTitleUpdate}
      />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
