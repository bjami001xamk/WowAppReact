import { useEffect, useState, FC } from 'react';
import CharacterCard from './charactercard';
import Characterinfo from './characterinfo';
import { Grid, Box, Typography } from '@material-ui/core';
import { Character } from '../types/index';

interface Props {
}


const Selectionscreen: FC<Props> = () => {
    const [ selectedCharacter, setSelectedCharacter ] = useState<Character | null>(null);
    const [ characters, setCharacters ] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchCharacterData() {
            let response = await fetch('https://wowback.herokuapp.com/characterdata', {credentials: 'include' });
            let data = await response.json();
            setCharacters(data);
        }

        fetchCharacterData();
           
    }, [])
    console.log(characters);

    if(selectedCharacter) {
        return (
            <Characterinfo setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter}/>
        )
    }

    if(characters){
        return(
            <Box pt={5} justifyContent='center'>
                <Typography align='center' variant='h3'>Your characters:</Typography>
                <Grid container spacing={3} style={{marginTop:10}}>
                    {characters.map((character) => {
                        return  <Grid item xs={12} sm={6} md={4} lg={3} key={character.id} style={{display:'flex', justifyContent:'center'}}>
                                    <CharacterCard key={character.id} character={character} setSelectedCharacter={setSelectedCharacter}/>
                                </Grid>
                    })}
                </Grid>
            </Box>
        )
    }

    return (
        <div>
            Loading character data...
        </div>
    )
}

export default Selectionscreen
