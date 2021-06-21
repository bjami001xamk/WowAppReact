import { Dispatch, SetStateAction, FC, useEffect, useState } from "react";
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { Character, CharaterStatistics } from '../types/index';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    maindiv: {
        backgroundColor: 'white',
        height: 800,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderWidth:'10px',
        borderColor:"black",
        borderRadius: 30
    },
  }));

interface Props{
    selectedCharacter: Character,
    setSelectedCharacter : Dispatch<SetStateAction<Character | null>>;
}


const Characterinfo: FC<Props> = ({selectedCharacter, setSelectedCharacter}) => {
    const [characterData, setCharacterData] = useState<CharaterStatistics | null>(null)

    useEffect(() => {
        async function fetchCharacterData() {
            let response = await fetch(`https://wowback.herokuapp.com/characterstatistics?characterName=${selectedCharacter.name}?realm=${selectedCharacter.realm.slug}`, {credentials: 'include' });
            let data : CharaterStatistics = await response.json(); 
            setCharacterData(data);  
        }
        fetchCharacterData();
    }, [])


    console.log(selectedCharacter)
    const classes = useStyles();
    //const style = { backgroundImage: `url(${selectedCharacter.mediainfo.assets[2].value})`};
    //console.log(style);

    if(!characterData) {
        return (
            <>
                <div className={classes.maindiv}>
                    Loading...
                </div>
                
            </>
            
        )
    }

    console.log(characterData);
    return (
        <>
            <div className={classes.maindiv} /*style={style}*/ >
                <Typography variant="body1">{characterData.health}</Typography>
            </div>
            <Button variant="contained" color="primary" onClick={() => setSelectedCharacter(null)}>Return</Button>
        </>
        
    )
}

export default Characterinfo
