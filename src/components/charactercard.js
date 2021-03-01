import React from 'react'
import { Card, Grid } from '@material-ui/core'
//https://render-eu.worldofwarcraft.com/character/bloodfeather/59/131045435-avatar.jpg
function Charactercard({character}) {
    let avatarUrl = character.mediainfo ? character.mediainfo.avatar_url 
                                            ? character.mediainfo.avatar_url
                                            : character.mediainfo.assets[0].value
                                        : "";

    return (
        
        <Card>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <img src={avatarUrl} alt=""/>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <p>{character.name}</p>
                    <p>{character.level}</p>
                </Grid>
            </Grid>
            
            
        </Card>
    )
}

export default Charactercard
