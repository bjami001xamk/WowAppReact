import { Dispatch, SetStateAction, FC, useEffect, useState } from "react";
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core'
import { Character, CharaterStatistics } from '../types/index';

const useStyles = makeStyles(() => ({
    maindiv: {
        backgroundColor: 'white',
        height: 800,
        maxWidth:900,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        border:"2px solid #064d94",
        borderRadius: 7,
        marginTop:10
    },
    row: {
        display:'flex',
        justifyContent:"space-between",
        marginLeft:30,
        marginRight:30,
        marginBottom:10
    },
    rowItem: {
        display:'flex',
        justifyContent:"space-between",
        minWidth:140
    }
    ,
  }));

interface Props{
    selectedCharacter: Character,
    setSelectedCharacter : Dispatch<SetStateAction<Character | null>>;
}


const Characterinfo: FC<Props> = ({selectedCharacter, setSelectedCharacter}) => {
    const [characterData, setCharacterData] = useState<CharaterStatistics | null>(null)

    useEffect(() => {

        async function fetchCharacterData() {
            let response = await fetch(`https://wowback.herokuapp.com/characterstatistics?characterName=${selectedCharacter.name}&realm=${selectedCharacter.realm.slug}`, {credentials: 'include' });
            let data : CharaterStatistics = await response.json(); 
            setCharacterData(data);  
        }

        fetchCharacterData();

    }, [selectedCharacter.name, selectedCharacter.realm.slug])
    
    const classes = useStyles();

    if(!characterData) {
        return (
            <>
                <div className={classes.maindiv}>
                    Loading...
                </div>
                
            </>
            
        )
    }

    return (
        <>
            <div className={classes.maindiv} style={{ backgroundImage: `url(${selectedCharacter.mediainfo?.render_url})`}}>
                <Typography style={{paddingTop:10}}align="center" variant="h4">{selectedCharacter.name} </Typography>
                <Typography align="center" variant="h4">{selectedCharacter.playable_race.name.en_GB} {selectedCharacter.playable_class.name.en_GB}</Typography>
                <Typography align="center" variant="h4">{selectedCharacter.realm.name.en_GB}</Typography>

                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Level: </Typography>
                        <Typography variant="body1">{selectedCharacter.level}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Strength:</Typography>
                        <Typography variant="body1">{characterData.strength.effective}</Typography>
                    </Box>
                </Box>
                
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Health:</Typography>
                        <Typography variant="body1">{characterData.health}</Typography>
                    </Box>
                    
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Intellect:</Typography>
                        <Typography variant="body1">{characterData.intellect.effective}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Power:</Typography>
                        <Typography variant="body1">{characterData.power}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Agility: </Typography>
                        <Typography variant="body1">{characterData.agility.effective}</Typography>
                    </Box>
                </Box>



                <Box className={classes.row} mt={8}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Versatility:</Typography>
                        <Typography variant="body1">{characterData.versatility}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Armor: </Typography>
                        <Typography variant="body1">{characterData.armor.effective}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Mastery:</Typography>
                        <Typography variant="body1">{characterData.mastery.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Block: </Typography>
                        <Typography variant="body1">{characterData.block.rating}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Critical:</Typography>
                        <Typography variant="body1">{characterData.melee_crit.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Parry: </Typography>
                        <Typography variant="body1">{characterData.parry.rating}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Haste:</Typography>
                        <Typography variant="body1">{characterData.melee_haste.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Dodge: </Typography>
                        <Typography variant="body1">{characterData.dodge.rating}</Typography>
                    </Box>
                </Box>

                <Box className={classes.row} mt={8}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Speed:</Typography>
                        <Typography variant="body1">{characterData.speed.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Mana regen: </Typography>
                        <Typography variant="body1">{characterData.mana_regen}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Lifesteal:</Typography>
                        <Typography variant="body1">{characterData.lifesteal.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Spell pen: </Typography>
                        <Typography variant="body1">{characterData.spell_penetration}</Typography>
                    </Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Avoidance:</Typography>
                        <Typography variant="body1">{characterData.avoidance.rating}</Typography>
                    </Box>
                    <Box className={classes.rowItem}>
                        <Typography variant="body1">Stamina: </Typography>
                        <Typography variant="body1">{characterData.stamina.effective}</Typography>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' mt={20}>
                    <Button variant="contained" color="primary" onClick={() => setSelectedCharacter(null)}>Back</Button>
                </Box>
            </div>
        </>
    )
}

export default Characterinfo
