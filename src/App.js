import {useEffect} from 'react';


function App() {

  useEffect(() => {
    async function fetchUser() {
      let response = await fetch('https://wowback.herokuapp.com/login', {
        credentials: 'include'
        
      });
      console.log(response);
      if(response.status === 400) {
        //let data = await response.json();
        console.log('hmm');

        let testresp = await fetch('https://wowback.herokuapp.com/characterdata', {
          credentials: 'include'
        });
        let testdata = await testresp.json();
        console.log(testdata);
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


  return (
    <div className="App">
      Testi

      <button onClick={() => logout()}>Logoutnappi</button>
    </div>
  );
}

export default App;
