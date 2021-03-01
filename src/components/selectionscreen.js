import { useEffect, useState } from 'react';
import CharacterCard from './charactercard';

function Selectionscreen() {

    const [ characters, setCharacters ] = useState(null);

    useEffect(() => {
        async function fetchCharacterData() {
            let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {credentials: 'include' });
            let testdata = await testresp.json();
            setCharacters(testdata.wow_accounts[0].characters);
        }
        fetchCharacterData();
    }, [])
    console.log(data);

    if(data){
        return(
            <>
                {characters.map((character) => {
                    <CharacterCard character={character}/>
                })}
            </>
        )
    }


    return (
        <div>
            Loading character data...
        </div>
    )
}

export default Selectionscreen
