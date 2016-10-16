import React, { Component } from 'react';

const ArtistInfo = (props) => {
  if (!props.artistTracks || props.artistTracks.length == 0) {
    return (<div></div>)
  }

  const {artistTracks} = props

  return (
    <div>
      <h6><b>Top Tracks</b></h6>
      <ul>
        {artistTracks.map((track) => {
          return (
            <li>{track}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default ArtistInfo;
