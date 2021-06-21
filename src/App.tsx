import {useEffect, useState} from 'react';
import Selectionscreen from './components/selectionscreen';
import {Container} from '@material-ui/core'
import bnetimage from './images/battlenet.png'
//import './app.css'


function App() {
  const [ user, setUser ] = useState(false);
  const [ bnetLoginUrl, setBnetLoginUrl ] = useState<string>("");

  useEffect(() => {
    async function fetchUser() {
      let response = await fetch('https://wowback.herokuapp.com/login', {
        credentials: 'include'
      });
      console.log(response);
      if(response.status === 400) {
        //let data = await response.json();
        console.log('hmm');
        
        
        setUser(true);
        
      } else{
        
        let data = await response.json();
        //window.location.assign(data);
        console.log(data);
        setBnetLoginUrl(data);
      }
      
    }
    fetchUser();

  }, [])

  const logout = async() => {
      let response = await fetch('https://wowback.herokuapp.com/logout', { credentials: 'include' });
      
      if(response.status === 200) {
        setUser(false);
      }

      console.log(response);
    
  }

  if(user) {


    return(
      <Container>
        <Selectionscreen/>
        <button onClick={() => logout()}>Logoutnappi</button>
      </Container>
    )

  }


  return (
    <Container maxWidth="sm">
      <p>Login with:</p>
      <button 
        style={{ backgroundImage: `url(${bnetimage})`, width:300, height:150, backgroundSize:'cover' }}
        onClick={() => window.location.href = bnetLoginUrl}
        >testia</button>
      
    </Container>
  );
}

export default App;