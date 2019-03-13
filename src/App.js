import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="app">
      <section id= 'menu'>
      <Link to="/home"><button className='navigation'>Home</button></Link>
      <Link to="/about"><button className='navigation'>About</button></Link>
      <Link to="/myWork"><button className='navigation'>My work</button></Link>
      <Link to="/contact"><button className='navigation'>Contact</button></Link>
      </section>
        <header className="home">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Anna Ikonomova
          </h1>
          <h2>Front-End Web developer</h2>
        </header>


        <main>
        <Route exact path="/" render={() => (
        <Home/>
      )}
      />
      <Route path="/home" render={() => (
        <Home />
      )} />
      <Route path="/about" render={() => (
        <About />
      )} />
      <Route path="/myWork" render={() => (
        <MyWork />
      )} />
      <Route path="/contact" render={() => (
        <Contact />
      )} />
      </main>
    </div>
    );
  }
}

export default App;
