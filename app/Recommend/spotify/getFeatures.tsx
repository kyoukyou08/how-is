import axios from "axios";
// import accessToken from "../api/spotify_auth"

// const spotifyID = "0v3iUsTe5rskRsxbUhboRl";

export async function getTrackInfo(id: string, access_token) {
  const response = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/tracks/${id}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.data;
}

export async function getTrackFeatures(id: string, access_token) {
  const response = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/audio-features/${id}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.data;
}
