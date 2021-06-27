import {useEffect, useState} from 'react';
import Selectionscreen from './components/selectionscreen';
import {Container, Typography, Box, Button} from '@material-ui/core'
import bnetimage from './images/battlenet.png'
import './App.css'

function App() {
  const [ user, setUser ] = useState<boolean>(false);
  const [ bnetLoginUrl, setBnetLoginUrl ] = useState<string>("/auth/battlenet");

  useEffect(() => {
    async function fetchUser() {
      let response = await fetch('https://wowback.herokuapp.com/login', { credentials: 'include' });
      
      if(response.status === 400) {
        setUser(true);

      } else{
        //let data = await response.json();
        setBnetLoginUrl('/auth/battlenet');
      }
      
    }
    fetchUser();
  }, [])

  const logout = async() => {
      let response = await fetch('https://wowback.herokuapp.com/logout', { credentials: 'include' });
      
      if(response.status === 200) {
        setUser(false);
      } 
  }

  if(user) {

    return(
      <Container fixed>
          <Selectionscreen/>
          <Button style={{marginTop:30, marginLeft:'20%'}} variant="contained" color="primary" onClick={() => logout()}>Logout</Button>
      </Container>
    )

  }

  return (
    <Container maxWidth="sm">
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' pt={10}>
        <Typography align='center' variant="h3">Login with:</Typography>
        <button 
          style={{ backgroundImage: `url(${bnetimage})`, borderRadius:5, width:300, height:150, backgroundSize:'cover', border:'2px solid black', marginTop:20}}
          onClick={() => window.location.href = bnetLoginUrl}
        ></button>
      </Box>
    </Container>
  );
}

export default App;