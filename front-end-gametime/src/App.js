import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state= {
      consoles: []
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/api/consoles");
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) return;
      this.setState((prevState) => {
        return {
          consoles: JSON.parse(xhr.response)
        }
      })
    });
    xhr.send();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
