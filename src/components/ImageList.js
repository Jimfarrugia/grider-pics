import "./ImageList.css";
import React from "react";

const ImageList = props => {
  const images = !props.images.length
    ? null
    : props.images.map(image => (
        <img
          key={image.id}
          src={image.urls.thumb}
          alt={image.alt_description}
        />
      ));
  return images ? (
    <div className='image-list'>{images}</div>
  ) : (
    <p>
      <em>Images will show here.</em>
    </p>
  );
};
export default ImageList;
