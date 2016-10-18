import Api from '../api'

let BASE_URL = 'https://api.spotify.com'
let VERSION = 'v1'
let COUNTRY = 'us'

export function fetchArtist(artist, callback) {
  let query = encodeURIComponent(artist)
  Api.get(`${BASE_URL}/${VERSION}/search?type=artist&q=${query}`).then(response => {
    let artist = response.artists.items[0];

    if (!artist) return;

    fetchSongs(artist.id, (topTracks) => {
      let data = {
        info: {
          id: artist.id,
          name: artist.name,
          followers: artist.followers.total,
          popularity: artist.popularity,
          imageUrl: artist.images[0].url,
          artistUrl: artist.external_urls.spotify
        },
        tracks: topTracks
      }
      callback(data)
    });
  });
}

export function fetchSongs(id, callback) {
  Api.get(`${BASE_URL}/${VERSION}/artists/${id}/top-tracks?country=${COUNTRY}`).then(response => {
    let topTracks = [];

    Object.keys(response.tracks).forEach(function (song) {
      topTracks.push(response.tracks[song].name);
    });
    callback(topTracks)
  });
}
