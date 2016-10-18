import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          type="text"
          onChange={event => this.onInputChange(event.target.value)} />
        <input
          value="Search"
          type="submit"
          onClick={event => this.onSearchButtonPressed(this.state.term)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }

  onSearchButtonPressed(term) {
    this.props.handleArtistSearch(term);
  }
}

export default SearchBar;
