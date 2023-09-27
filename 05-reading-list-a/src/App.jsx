import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (newTitle) => {
    console.log(`need to add a book with the title - ${newTitle}`);
  };

  return (
    <div className="app">
      This is App
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
