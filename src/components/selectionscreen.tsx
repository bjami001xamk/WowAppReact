import { useEffect, useState, FC } from 'react';
import CharacterCard from './charactercard';
import Characterinfo from './characterinfo';
import { Grid } from '@material-ui/core';
import { Character } from '../types/index';
interface Props {
    
}


const Selectionscreen: FC<Props> = () => {
    const [ selectedCharacter, setSelectedCharacter ] = useState<Character | null>(null);
    const [ characters, setCharacters ] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchCharacterData() {
            let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {credentials: 'include' });
            let testdata = await testresp.json();
            setCharacters(testdata);
            console.log('apikutsupew')
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
            <Grid container spacing={3}>
                {characters.map((character) => {
                    return  <Grid item xs={3} key={character.id}>
                                <CharacterCard key={character.id} character={character} setSelectedCharacter={setSelectedCharacter}/>
                            </Grid>
                })}
            </Grid>
        )
    }


    return (
        <div>
            Loading character data...
        </div>
    )
}

export default Selectionscreen
