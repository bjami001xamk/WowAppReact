import { useEffect, useState } from 'react';

function selectionscreen() {

    const [ data, setData ] = useState(null);

    useEffect(() => {
        async function fetchCharacterData() {
            let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {credentials: 'include' });
            let testdata = await testresp.json();
            setData(testdata.wow_accounts[0].characters);
        }
        fetchCharacterData();
    }, [])
    console.log(data);

    if(data){
        return(
            <div>

            </div>
        )
    }


    return (
        <div>
            Hahmot tähän
        </div>
    )
}

export default selectionscreen
