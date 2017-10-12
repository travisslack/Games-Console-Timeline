import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline'
import ConsoleInformation from './ConsoleInformation';


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

  changeConsole(console) {
    this.setState( { selectedConsole: console } )
  }
  



  render() {
    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-title">Games Consoles</h1>
        </header>
      <section>
        <Timeline changeConsole={this.changeConsole.bind(this)} consoles={this.state.consoles} />
      </section>
      <div className="arrows">
        {/* <button className="arrow arrow__prev disabled" disabled>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow"/>
        </button>
        <button className="arrow arrow__next">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow"/>
        </button> */}
      </div>
      <div> 
      <ConsoleInformation console={this.state.selectedConsole} /> 
      </div> 

      </section>
    );
  }
}

export default App;
