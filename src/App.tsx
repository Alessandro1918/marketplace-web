import React from 'react';
//import logo from './logo.svg';
import logo from './logoQuitanda.jpg';
import './App.css';

import { Router } from './routes'


function App() {

  return (
    <div className="App">

      <p className="title">Sítio Verde do Alessandro</p>
      <img src={logo} className="App-logo" alt="logo" />
      
      <Router/>
    </div>
  );
}

export default App;
