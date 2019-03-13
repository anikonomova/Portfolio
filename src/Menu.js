import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';


class Menu extends Component {

  render() {

      return (
        <div id='.root'>
        <div id= 'menu'>

        <Link to="/home"><button className='navigation'>Home</button></Link>
        <Link to="/about"><button className='navigation'>About</button></Link>
        <Link to="/myWork"><button className='navigation'>My work</button></Link>
        <Link to="/contact"><button className='navigation'>Contact</button></Link>
        </div>

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
      )
    }
  }
export default Menu;
