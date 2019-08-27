import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export class App extends Component {
  state = {
    searchResults: []
  };

  // Handle form submission
  onSearchSubmit = async term => {
    await axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        }
      })
      .then(response => {
        // Success
        const images = response.data.results.map(image => {
          const {
            id,
            alt_description: description,
            urls: { thumb: url }
          } = image;
          return { id, description, url };
        });
        this.setState({ searchResults: images });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
