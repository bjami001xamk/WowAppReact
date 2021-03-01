import { useEffect } from 'react';

function selectionscreen() {
    useEffect(() => {
        let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {
          credentials: 'include'
        });
        let testdata = await testresp.json();
    }, [])
    
    return (
        <div>
            Hahmot tähän
        </div>
    )
}

export default selectionscreen
