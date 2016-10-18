import React, { Component } from 'react';

const artistTracks = (props) => {
  if (!props.artistTracks || props.artistTracks.length == 0) {
    return (<div></div>)
  }

  return (
    <div>
      <h5>Top Tracks</h5>
      <ul>
        {props.artistTracks.map((track) => {
          return (
            <li key={track}>
              {track}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default artistTracks;
