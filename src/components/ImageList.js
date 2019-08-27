import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = !props.images.length
    ? null
    : props.images.map(image => <ImageCard key={image.id} image={image} />);

  if (!images) {
    return (
      <p>
        <em>Type something in the box above and press Enter!</em>
      </p>
    );
  }

  return <div className='image-list'>{images}</div>;
};
export default ImageList;
