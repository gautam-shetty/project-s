import React from 'react'

const StreamRender = ({activeStream}) => {

    const streamURL="https://player.twitch.tv/?channel="+String(activeStream)+"&parent=localhost"

    console.log(activeStream)

    return (
        <div className="main-deck">
            <iframe 
                src={streamURL}
                frameborder="0" allowfullscreen="true" scrolling="no" 
                height="100%" width="100%"
            />
        </div>
        
    )
}

export default StreamRender
