import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Made by Gustavo Santana</p>
        <HelloWorld />
        <SayMyName nome="Visitante" />
        <div>
        <p>Número: {number}</p>
        <button onClick={changeNumber}>Aumentar número</button>
      </div>
      </header>
    </div>
  );
}

export default App;
