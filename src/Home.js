import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

class Home extends Component {
  render() {
    return (
      <div className="boxheading">
      <p className='hello'>Hey, I'm glad to see you here. :)</p>
          <img src={logo} className="App-logo" alt="logo" />
          <header className="name">
          <h1> Anna Ikonomova </h1>
          <h2>Front-End Web developer</h2>
        </header>
        </div>
    );
  }
}

export default Home;
