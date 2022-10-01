import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Made by Gustavo Santana</p>
        <HelloWorld />
        <SayMyName nome="Visitante" />
        <Pessoa 
        nome="Gustavo" 
        idade="30" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
        />
      </header>
    </div>
  );
}

export default App;
