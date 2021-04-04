import axios from 'axios'

var token = "";

//Twitch API Token Generation
export const GenerateTwitchAuth = async () => {
    const response = await axios.post(
        "https://id.twitch.tv/oauth2/token?" +
        "client_id=" + process.env.REACT_APP_CLIENT_ID + "&" +
        "client_secret=" + process.env.REACT_APP_CLIENT_SECRET + "&" +
        "grant_type=client_credentials"
        ).then(function (response) {
            token=String(response.data.access_token)
        })
        .catch((err) => console.log('Error generating twitch autorization! - ', err))

    return true
}

const api = axios.create({
    baseURL: "https://api.twitch.tv/helix/"
})

api.interceptors.request.use(
    function(config) {
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token
        config.headers["Client-Id"] = process.env.REACT_APP_CLIENT_ID
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

//Get List of live englsih streamers
export const GetLiveStreams = async () => {
    
    const response = await api.get(
        'streams?first=100&language=en'
        )
        .catch((err) => console.log('Error fetching streams! - ', err))

    return response.data
};