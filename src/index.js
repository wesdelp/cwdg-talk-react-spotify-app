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

    this.handleArtistSearch('Green Day');
  }

  handleArtistSearch(artist) {
    API.fetchArtist(artist, (data) => {
      this.setState({
        artistInfo : data.info,
        artistTracks: data.tracks
      });
      console.log("STATE:", this.state)
    });
  }

  render() {
    const {artistInfo, artistTracks} = this.state

    return (
      <div>
        <h2 className="title">Spotify Search</h2>
        <SearchBar handleArtistSearch={this.handleArtistSearch.bind(this)} />
        <ArtistInfo artistInfo = {artistInfo} />
        <ArtistTracks artistTracks = {artistTracks} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
