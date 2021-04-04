import { React, useState } from 'react'
import { TextField, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, LinearProgress } from '@material-ui/core'

const SideBar = ({ streamers, onSelect }) => {

    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const filteredStreamers = streamers.filter((streamer) => {
        return streamer.user_name.includes(searchValue)
    })

    const hasStreamers = streamers.length > 0

    return (
        <div>
            <div>
                <TextField label="Filter channel.." value={searchValue} onChange={handleInputChange} variant="outlined" fullWidth />
            </div>
            <Typography variant="h6" align="center" gutterBottom>Top Streams</Typography>
            {
                hasStreamers ?
                    <List>
                        {filteredStreamers.map((streamer) => {
                            return <ListItem button onClick={() => onSelect(streamer.user_login)} key={streamer.id}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={streamer.user_name}
                                    secondary={streamer.viewer_count + ' viewers'}
                                />
                            </ListItem>
                        })}
                    </List>

                    : <LinearProgress color="secondary" />
            }
        </div>
    )
}

export default SideBar
