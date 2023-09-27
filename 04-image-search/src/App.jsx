import React, { useState } from "react";
import InputField from "./components/InputField";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./app.css";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    console.log(result.data.results);
    setImages(result.data.results);
  };
  return (
    <div>
      <InputField onSubmit={handleSubmit} />

      <ImageList images={images} />
    </div>
  );
};

export default App;
