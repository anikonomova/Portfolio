import React, { Component } from 'react';
import './App.css';
import anIko from './anIko.jpg';

class About extends Component {
  render() {
    return (
      <div className="info">
      <img className='anna' src={anIko} alt='Anna Ikonomova'></img>
      <p>My Name is Anna Ikonomova - a Front-end Developer.<br></br>
      I love to create, to experiment and I'm a lifelong learner.<br></br>
      There is nothing impossible!<br></br>
  The first line of code, that I wrote, was when the Google Udacity Scolarship challenge course began.
  Now I'm still learning and definately willing to become a real professional.
      </p>
    </div>

    );
  }
}

export default About;
