import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';


class Contact extends Component {
  render() {
    return (
      <div className="info">
      <div className="box follow">
      <footer>
        <h3 className="contact">Follow me!</h3>
        <SocialIcon url="https://www.facebook.com/ani.strandjeva" />
        <SocialIcon url="https://www.linkedin.com/in/anna-ikonomova-11880361/" />
        <SocialIcon url="https://github.com/anikonomova" />
        <SocialIcon url="https://codepen.io/an_iko/#" />
        <SocialIcon url="https://plus.google.com/u/0/117242742830980585073" />
      </footer>
    </div>
</div>
    );
  }
}

export default Contact;
