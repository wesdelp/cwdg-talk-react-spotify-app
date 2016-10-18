import React, { Component } from 'react';

const ArtistInfo = (props) => {
  if (!props.artistInfo) {
    return (<div></div>)
  }

  const { name, followers, popularity, genre, imageUrl, artistUrl } = props.artistInfo

  return (
    <div>
      <hr />
      <h5>Name</h5>
      <h6>{name}</h6>

      <h5>Followers</h5>
      <h6>{followers}</h6>

      <h5>Popularity</h5>
      <h6>{popularity}/100</h6>

      <a href={artistUrl}><img src={imageUrl} /></a>
      <hr />
    </div>
  );
};

export default ArtistInfo;
