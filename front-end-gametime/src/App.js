import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline'


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
          <h1 className="App-title">Games Consoles</h1>
        </header>
        <section>
        <Timeline consoles={this.state.consoles} />
        </section>
      </div>
    );
  }
}

export default App;
