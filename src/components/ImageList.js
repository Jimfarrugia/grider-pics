import React from 'react';

const ImageList = props => {
  const searchResults = props.searchResults;
  const images = searchResults.length < 1 ? null : searchResults.map(image => 
    <li key={image.id}>
      <img src={image.url} alt={image.description} />
    </li>
  );
  return <ul>{images}</ul>;
}
export default ImageList
