import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

class Home extends Component {
  render() {
    return (
      <div className="boxhome">
      <div className='hello'>
      <p className='helloText'>Hey, I'm glad to see you here. :)</p>
      </div>
      <div className='boxheading'>
          <img src={logo} className="App-logo" alt="logo" />
          <header className="name">
          <h1> Anna Ikonomova </h1>
          <h2>Front-End Web developer</h2>
        </header>
        </div>
        </div>
    );
  }
}

export default Home;
