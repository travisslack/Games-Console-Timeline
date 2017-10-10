import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ConsoleListing from './ConsoleListing';


class App extends Component {

  constructor() {
    super();
    this.state= {
      consoles: [],
      selectedConsole: null
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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Games Consoles</h1>
        </header>
        <section>
          <ConsoleListing consoles={this.state.consoles}/>
        </section>
      </div>
    );
  }
}

export default App;
