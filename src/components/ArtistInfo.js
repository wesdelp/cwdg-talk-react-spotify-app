import React, { Component } from 'react';

const ArtistInfo = (props) => {
  if (!props.artistInfo) {
    return (<div></div>)
  }

  const {name, followers, popularity, genre, imageUrl, artistUrl} = props.artistInfo

  return (
    <div>
      <hr />
      <h6><b>Name</b> - {name}</h6>
      <h6><b>Followers</b> - {followers}</h6>
      <h6><b>Popularity</b> - {popularity}/100</h6>
      <a href={artistUrl}><img src={imageUrl} /></a>
      <hr />
    </div>
  );
};

export default ArtistInfo;
