import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={e => this.setState({ searchTerm: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar