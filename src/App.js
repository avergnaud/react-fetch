import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Ticker } from "./components/Ticker"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Ticker></Ticker>
        </header>
      </div>
    );
  }
}

export default App;
