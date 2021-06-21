import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count , setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <p> Cliques {count}</p>
      <button className="btn btn-outline-danger" onClick={()=> setCount(count+1)}>Somar</button>
        
      </header>
    </div>
  );
}

export default App;
