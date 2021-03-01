import { useEffect, useState } from 'react';

function selectionscreen() {

    const [ data, setData ] = useState(null);

    useEffect(() => {
        let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {
          credentials: 'include'
        });
        let testdata = await testresp.json();
        setData(testdata.wow_accounts[0].characters);
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
