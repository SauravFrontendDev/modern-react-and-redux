import React from "react";

const ImageShow = ({ image }) => {
  console.log(image.urls.full);
  return (
    <div>
      <img
        width={350}
        src={image.urls.full}
        alt={image.alt_description || image.tags[0]}
      />
    </div>
  );
};

export default ImageShow;
