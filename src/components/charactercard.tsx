import React, { FC, Dispatch, SetStateAction } from 'react'
import { Card, CardActionArea ,Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Character } from '../types/index'

const useStyles = makeStyles(() => ({
    textBox: {
        marginLeft:10,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    card:{
        width:260,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 0px 5px 2px #064d94"
        },
        border:"2px solid black",
        backgroundColor:'lightskyblue'
    },
}));
  
interface Props{
    character: Character,
    setSelectedCharacter : Dispatch<SetStateAction<Character | null>>;
}

const Charactercard: FC<Props> = ({character, setSelectedCharacter}) => {
    const classes = useStyles();
    const genderID = character.type === "MALE" ? 1 : 0
    const raceId = character.playable_race.id;
    let avatarUrl = character.mediainfo ? character.mediainfo.avatar_url 
                                        : `https://render-eu.worldofwarcraft.com/shadow/avatar/${raceId}-${genderID}.jpg`
                   
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={() => setSelectedCharacter(character)}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <img src={avatarUrl} alt=""/>
                    <div className={classes.textBox}>
                        <Typography variant="subtitle1">{character.name} {character.level}</Typography>
                        <Typography variant="subtitle1">{character.playable_class.name.en_GB}</Typography>
                    </div>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default Charactercard
