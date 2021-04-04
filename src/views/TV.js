import { React, useState, useEffect } from 'react'
import { Box, Grid, Paper } from '@material-ui/core'
import { GenerateTwitchAuth, GetLiveStreams } from '../services/TwitchService'
import axios from 'axios'
import SideBar from '../components/SideBar'
import StreamRender from '../components/StreamRender'

const TV = () => {

  const [streamers, setStreamers] = useState([])

  const [activeStream, setActiveStream] = useState('')

  const fetchGetLiveStreams = async() => {
    await GenerateTwitchAuth()
    await GetLiveStreams()
    .then(response => {
        setStreamers(response.data)
        changeActiveStream(response.data[0].user_login)
    })
  }

  const changeActiveStream = (value) => {
    setActiveStream(value)
  }

  useEffect(() => {
    fetchGetLiveStreams()
  }, [])

  return (
    <Box display="flex" height="100vh" bottom="0" overflow="hidden" padding='0' margin='0'>
      <Box component="div" padding={1} paddingTop={2} width="18%" overflow="auto">
        <SideBar streamers={streamers} onSelect={changeActiveStream} />
      </Box>
      <Box display="flex" flexGrow={1} width="82%" alignItems="center">
        <StreamRender activeStream={activeStream} />
      </Box>
    </Box>
  )
}

export default TV
