import axios from "axios";

const Authorize = async () => {
  const CLIENT_ID = "682255270e3f44f6b06e2d225420a3f0";
  const CLIENT_SECRET = "c000e370b3244989b4b074be533df1c7";
  let accessToken = 0;
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      //   process.env.CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
    //   process.env.CLIENT_SECRET
  };

  fetch("https://accounts.spotify.com/api/token", authParameters)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      accessToken = data.access_token;
      // setAccessToken(data.access_token);
      console.log(data.access_token);
    });
  return accessToken;
};

export default Authorize();




// const getAccessToken = async () => {
//    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
//    try {
//      const formData = new URLSearchParams();
//      formData.append('grant_type', 'client_credentials');
    
//      // formData.toString() を使って送信
//      const response = await axios.post('https://accounts.spotify.com/api/token', formData.toString(), {
//        headers: {
//          Authorization: `Basic ${authString}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//        },
//      });

//     if (!response.data || !response.data.access_token) {
//       throw new Error('アクセスaトークンがレスポンスに含まれていません');
//     }

//     return response.data.access_token;
//   } catch (error) {
//     if (error.response) {
//       console.error('Spotify APIからのアクセストークン取得エラー:', error.response.data);
//     } else if (error.request) {
//       console.error('リクエストに問題があります:', error.request);
//     } else {
//       console.error('一般的なエラー:', error.message);
//     }
//     throw error;
//   }
// };
//  export const searchTracks = async (query) => {
//    const token = await getAccessToken();

//    const response = await axios.get('https://api.spotify.com/v1/search', {
//      headers: {
//        Authorization: `Bearer ${token}`,
//      },
//      params: {
//        q: encodeURIComponent(query),
//        type: 'track',
//        limit: 10,
//      },
//    });

//    return response.data.tracks.items;
//  };

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
