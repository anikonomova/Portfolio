import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';


class Contact extends Component {
  render() {
    return (
      <div className="info">
      <div className="follow">
        <h3 className="contact">Follow me:</h3>
        <SocialIcon className='social' url="https://www.facebook.com/ani.strandjeva" />
        <SocialIcon className='social' url="https://www.linkedin.com/in/anna-ikonomova-11880361/" />
        <SocialIcon className='social' url="https://github.com/anikonomova" />
        <SocialIcon className='social' url="https://codepen.io/an_iko/#" />
        <SocialIcon className='social' url="https://plus.google.com/u/0/117242742830980585073" />
    </div>
</div>
    );
  }
}

export default Contact;
