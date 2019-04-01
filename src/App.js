import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="boxmenu">
      <section id= 'menu'>
      <Link to="/home"><button className='navigation' tabIndex = {-1}>Home</button></Link>
      <Link to="/about"><button className='navigation' tabIndex = {-1}>About</button></Link>
      <Link to="/myWork"><button className='navigation' tabIndex = {-1}>My work</button></Link>
      <Link to="/contact"><button className='navigation' tabIndex = {-1}>Contact</button></Link>
      </section>
      </div>
      <div className="boxmain">
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
    </div>
  )
  }
}

export default App;
