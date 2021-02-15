import { React, useState } from 'react'
import { TextField, Typography , List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, LinearProgress } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const SideBar = ({ streamers, onSelect}) => {

    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const filteredStreamers = streamers.filter((streamer) => {
        return streamer.user_name.includes(searchValue)
    })

    const hasStreamers = streamers.length > 0

    return (
        <div className="side-bar">
            <div className="search-bar">
                <TextField label="Filter channel.." value={searchValue} onChange={handleInputChange} variant="outlined" autoFocus fullWidth/>
            </div>
            <Typography variant="h6" align="center" gutterBottom>Top Streams</Typography>
            {
                hasStreamers ? 
                <Paper square elevation={0} style={{  maxHeight: '75%', overflow: 'auto'}}>
                <List>
                    {filteredStreamers.map((streamer) => {
                        return  <ListItem button onClick={() => onSelect(streamer.user_login)} key={streamer.id}>
                                    <ListItemAvatar>
                                        <Avatar/>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={streamer.user_name} 
                                        secondary={streamer.viewer_count+' viewers'}
                                    />
                                </ListItem>
                    })}
                </List>
                </Paper>
                : <LinearProgress color="secondary" />
            }
        </div>
    )
}

export default SideBar
