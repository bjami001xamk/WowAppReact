import React from 'react'
import { Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    textBox: {
        marginLeft:10,
    },
  }));
  

function Charactercard({character}) {
    const classes = useStyles();
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
                <div className={classes.textBox}>
                    <p>{character.name}</p>
                    <p>{character.level}</p>
                </div>
            </Grid>
            
            
        </Card>
    )
}

export default Charactercard
