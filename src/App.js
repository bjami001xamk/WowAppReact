import {useEffect, useState} from 'react';
import Selectionscreen from './components/selectionscreen';

function App() {
  const [ user, setUser ] = useState(false);


  useEffect(() => {
    async function fetchUser() {
      let response = await fetch('https://wowback.herokuapp.com/login', {
        credentials: 'include'
        
      });
      console.log(response);
      if(response.status === 400) {
        //let data = await response.json();
        console.log('hmm');
        
        
        setUser("löytyy");
        
      } else{
        
        let data = await response.json();
        //window.location.assign(data);
        console.log(data);
      }
      
    }
    fetchUser();

  }, [])

  const logout = async() => {
      let response = await fetch('https://wowback.herokuapp.com/logout', { credentials: 'include' });
      console.log(response);
    
  }

  if(user) {


    return(
      <>
        <Selectionscreen/>
        <button onClick={() => logout()}>Logoutnappi</button>
      </>
    )

  }


  return (
    <div className="App">
      Testi

      
    </div>
  );
}

export default App;
