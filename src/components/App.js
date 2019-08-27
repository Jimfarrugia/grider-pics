import React, { Component } from 'react'
import SearchBar from './SearchBar';
import axios from 'axios';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export class App extends Component {
  onSearchSubmit(term) {
    axios.get(
      'https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        }
      }
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
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

