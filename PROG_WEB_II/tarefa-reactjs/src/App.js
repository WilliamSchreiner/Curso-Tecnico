
import axios from 'axios';
import {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
   axios.get("http://localhost:3100/tarefa").then(resultado => {
    console.log(resultado.data);
   })
  }, [])

  return (
    <div className="App">
       <h3>TESTE</h3>
  
    </div>
  );
}

export default App;
