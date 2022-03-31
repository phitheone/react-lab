import {useState} from 'react';
import './App.css';

//componentes

const App = () => {
  //code
  const [contador, setContador] = useState(0);

  //salida html
  return (
    <div className="App">
      <button onClick={() => setContador((prevContador) => prevContador - 1)}>-</button>
      <h1>{contador}</h1>
      <button onClick={() => setContador((prevContador) => prevContador + 1)}>+</button>
    </div>
  );
}

export default App;
