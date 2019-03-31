import React, { Component } from 'react';
import './App.css';
import anIko from './anIko.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutMe">
      <img className='anna' src={anIko} alt='Anna Ikonomova'></img>
      <h3>About me</h3>
      <p className='about'>My Name is Anna Ikonomova - Front End Developer.<br></br>
      I love to create, to experiment and I love to learn.<br></br>
      There is nothing impossible!<br></br>
      The first line of code, that I wrote, was when the Google Udacity Scolarship challenge <br></br>
      course began at the end of 2017. Now I'm still learning and definately willing to build a career in the field.
      </p>
      <h3>Skills</h3>
      <p className='about'> Html5, CSS3, JavaScript, React, Git, Git hub, Responsive Design and etc.</p>
      <h3>Soft skills</h3>
      <p  className='about'>Flexibility, Strong work ethic and team spirit.</p>
    </div>

    );
  }
}

export default About;
