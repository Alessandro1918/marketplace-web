import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginML } from './components/LoginML'
import { ItemsList } from './components/ItemsList'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <LoginML/>
        
        <ItemsList/>
      </header>
    </div>
  );
}

export default App;
