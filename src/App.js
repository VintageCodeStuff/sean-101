import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation"
import Main from "./Main"
import Panel from "./Panel"
import ConfessionBoard from "./ConfessionBoard.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Main/>
        <Panel/>
        <ConfessionBoard/>
      </div>
    );
  }
}

export default App;
