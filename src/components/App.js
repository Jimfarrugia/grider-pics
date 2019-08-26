import React, { Component } from 'react'
import SearchBar from './SearchBar';

export class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    console.log(process.env.REACT_APP_UNSPLASH_KEY);
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App

