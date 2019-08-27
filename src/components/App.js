import axios from 'axios';
import React, { Component } from 'react'
import SearchBar from './SearchBar';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

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
        let { id, alt_description: description, urls: { regular: url } } = image;
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
      </div>
    );
  }
}

export default App

