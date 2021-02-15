import { React, useState, useEffect } from 'react'
import axios from 'axios'
import SideBar from './SideBar'
import StreamRender from './StreamRender'

const TV = () =>  {

    const [streamers, setStreamers] = useState([])

    const [activeStream, setActiveStream] = useState('hiko')

    const generateTwitchAuth = async() => {

      const response = await axios
      .post(
        "https://id.twitch.tv/oauth2/token?"+
        "client_id="+process.env.REACT_APP_CLIENT_ID+"&"+
        "client_secret="+process.env.REACT_APP_CLIENT_SECRET+"&"+
        "grant_type=client_credentials"
      )
      .catch((err) => console.log('Error generating twitch autorization! - ', err))

      return response.data.access_token

    }

    const getStreamers = async() => {

      const config = {
        headers: {
          Authorization: 'Bearer ' + await generateTwitchAuth(),
          'Client-Id': process.env.REACT_APP_CLIENT_ID,
        }
      }

      const response = await axios
      .get(
        "https://api.twitch.tv/helix/streams?first=100&language=en",
        config
      )
      .catch((err) => console.log('Error fetching streams! - ', err))

      console.log(response.data.data)

      if(response && response.data) {
        setStreamers(response.data.data)
        changeActiveStream(response.data.data[0].user_login)
      }
    }

    const changeActiveStream = (value) => {
      setActiveStream(value)
    }
  
    useEffect(() => {
      getStreamers()

    }, [])

    return (
        <div className="view">
          <SideBar streamers={streamers} onSelect={changeActiveStream} />
          <StreamRender activeStream={activeStream}/>
        </div>
    )
}

export default TV
