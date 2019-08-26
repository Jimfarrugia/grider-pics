import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={e => this.setState({ searchTerm: e.target.value })}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar