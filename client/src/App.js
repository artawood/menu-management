import React, { Component } from 'react';
import "./custom.css";
import Header from "./components/Header";
import Hero from './components/Hero';
import Container from "react-bootstrap/Container";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <p>Hey There</p>
      </div>
    );
  }
}

export default App;
