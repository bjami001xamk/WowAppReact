import React from 'react'
import { Card } from '@material-ui/core'
//https://render-eu.worldofwarcraft.com/character/bloodfeather/59/131045435-avatar.jpg
function Charactercard({character}) {
    let avatarUrl = character.mediainfo.found ? character.mediainfo.assets[0].value : "";

    return (
        
        <Card>
            <img src={avatarUrl} />
            <p>{character.name}</p>
            <p>{character.level}</p>
        </Card>
    )
}

export default Charactercard
