// Spotify Search

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as API from './api/spotify';

import SearchBar from './components/SearchBar';
import ArtistInfo from './components/ArtistInfo';
import ArtistTracks from './components/ArtistTracks';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistInfo: {},
      artistTracks: []
    };
  }

  handleArtistSearch(artist) {
    API.fetchArtist(artist, (data) => {
      console.log("STATE:", data)
    });
  }

  render() {

    return (
      <div>
        <h2 className="title">Welcome to React</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
