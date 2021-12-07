import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './services/api';

type AuthResponse = {
  access_token: string;
  refresh_token: string;
}

function App() {

  async function signIn(code: string) {
    console.log(code)
    const response = await api.post<AuthResponse>('ml/auth', {code: code})
    const accessToken = response.data.access_token
    console.log(accessToken)
  }

  useEffect(() => {
    const url = window.location.href    //http://localhost:3001/?code=TG-abfksf....
    if (url.includes('?code=')) {
      const [ urlWithoutCode, code ] = url.split('?code=')
      window.history.pushState({}, '', urlWithoutCode)  //send the user to the same page, but without the 'code' in the brownser's address bar
      signIn(code)
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href={'http://localhost:2000/ml'}>Login no ML</a>
      </header>
    </div>
  );
}

export default App;
