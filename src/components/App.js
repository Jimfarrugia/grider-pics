import axios from 'axios';
import React, { Component } from 'react'
import SearchBar from './SearchBar';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const ImageList = props => {
  const searchResults = props.searchResults;
  const images = searchResults.length < 1 ? null : searchResults.map(image => 
    <li key={image.id}>
      <img src={image.url} alt={image.description} />
    </li>
  );
  return <ul>{images}</ul>;
}

export class App extends Component {
  state = {
    searchResults: [],
  }

  onSearchSubmit = term => {
    axios.get(
      'https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        }
      }
    )
    .then(response => {
      // Success
      const images = response.data.results.map(image => {
        let { id, alt_description: description, urls: { thumb: url } } = image;
        return { id, description, url };
      });
      this.setState({searchResults: images});
    })
    .catch(error => console.log(error));
  }

  render() {    
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App

