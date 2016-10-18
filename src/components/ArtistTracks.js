import React, { Component } from 'react';

const ArtistTracks = (props) => {
  if (!props.artistTracks || props.artistTracks.length == 0) {
    return (<div></div>)
  }

  return (
    <div>
      <h6>Artist Info</h6>
    </div>
  );
};

export default ArtistTracks;
