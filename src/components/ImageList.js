import React from "react";

const ImageList = props => {
  const images =
    props.images.length < 1
      ? null
      : props.images.map(image => (
          <li key={image.id}>
            <img src={image.urls.thumb} alt={image.alt_description} />
          </li>
        ));
  return images ? (
    <ul>{images}</ul>
  ) : (
    <p>
      <em>Images will show here.</em>
    </p>
  );
};
export default ImageList;
