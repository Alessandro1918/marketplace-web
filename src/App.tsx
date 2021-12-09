import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from './routes'


function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <Router/>
    </div>
  );
}

export default App;
