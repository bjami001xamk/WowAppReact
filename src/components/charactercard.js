import React from 'react'
import { Card } from '@material-ui/core'
//https://render-eu.worldofwarcraft.com/character/bloodfeather/59/131045435-avatar.jpg
function Charactercard({character}) {
    let avatarUrl = character.mediainfo ? character.mediainfo.avatar_url : "";

    return (
        
        <Card>
            <img src={avatarUrl} alt=""/>
            <p>{character.name}</p>
            <p>{character.level}</p>
        </Card>
    )
}

export default Charactercard
