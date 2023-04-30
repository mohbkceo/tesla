import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Home} from './components/index';
import './css/all.min.css';
import './css/normalize.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
