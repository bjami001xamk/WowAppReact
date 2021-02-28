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
        console.log('hmm')
      } else{
        
        let data = await response.json();
        //window.location.assign(data);
        console.log(data);
      }
      
    }
    fetchUser();

  }, [])

  
  return (
    <div className="App">
      Testi
    </div>
  );
}

export default App;
