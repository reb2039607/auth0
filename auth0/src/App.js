// import React from 'react';
import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import "./index.js";
import Secret from "./components/Secret";

class App extends Component() {
  render() {
  let mainComponent = ""
  switch(this.props.location) {
    case "":
      mainComponent = <Main />;
      break;
    case "secret":
      mainComponent = <Secret />;
      break;
    default:
      mainComponent = <Main />;
  }
  

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, {this.props.name}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        {mainComponent}
    </div>
  );
  }
}

export default App;

//hasn't been working since the beginning, looks like a possible older version of react?
