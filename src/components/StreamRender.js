import React from 'react'

const StreamRender = ({activeStream}) => {

    return (
        <div>
            <iframe 
                src={"https://player.twitch.tv/?channel="+String(activeStream)+"&parent=localhost"}
                frameborder="0" allowfullscreen="true" scrolling="no"
            />
        </div>
        
    )
}

export default StreamRender
