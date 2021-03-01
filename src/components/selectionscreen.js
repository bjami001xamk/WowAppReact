import { useEffect, useState } from 'react';
import CharacterCard from './charactercard';
import { Grid } from '@material-ui/core'

function Selectionscreen() {

    const [ characters, setCharacters ] = useState(null);

    useEffect(() => {
        async function fetchCharacterData() {
            let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {credentials: 'include' });
            let testdata = await testresp.json();
            setCharacters(testdata);
        }
        fetchCharacterData();
    }, [])
    console.log(characters);

    if(characters){
        return(
            <Grid container spacing={3}>
                {characters.map((character) => {
                    return  <Grid item xs={3}>
                                <CharacterCard character={character}/>
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
