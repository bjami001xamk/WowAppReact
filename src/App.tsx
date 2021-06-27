import {useEffect, useState} from 'react';
import Selectionscreen from './components/selectionscreen';
import {Container, Typography, Box, Button} from '@material-ui/core'
import bnetimage from './images/battlenet.png'
import './App.css'

function App() {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);

  useEffect(() => {
    async function checkLogin() {
      let response = await fetch('https://wowback.herokuapp.com/checklogin', { credentials: 'include' });
      
      if(response.status === 200) {
        setLoggedIn(true);
      } 
    }

    checkLogin();
  }, [])

  const logout = async() => {
      let response = await fetch('https://wowback.herokuapp.com/logout', { credentials: 'include' });
      
      if(response.status === 200) {
        setLoggedIn(false);
      } 
  }

  if(loggedIn) {
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
          onClick={() => window.location.href = 'https://wowback.herokuapp.com/auth/battlenet'}
        ></button>
      </Box>
    </Container>
  );
}

export default App;