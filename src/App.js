import {useEffect} from 'react';


function App() {

  useEffect(() => {
    async function fetchUser() {
      let response = await fetch('https://localhost:8000/login');
      console.log(response);
      if(response.status === 400) {
        let data = await response.json();
    
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
