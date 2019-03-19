import React, { Component } from 'react';
import './App.css';
import anIko from './anIko.jpg';

class About extends Component {
  render() {
    return (
      <div className="info">
      <img className='anna' src={anIko} alt='Anna Ikonomova'></img>
      <h3>About me</h3>
      <p className='aboutMe'>My Name is Anna Ikonomova - Front End Developer.<br></br>
      I love to create, to experiment and I love to learn.<br></br>
      There is nothing impossible!<br></br>
      The first line of code, that I wrote, was when the Google Udacity Scolarship challenge <br></br>
      course began. Now I'm still learning and definately willing to become a real professional.
      </p>
      <h3>Skills</h3>
      <p> Html5, CSS3, JavaScript, React, Git, Git hub, Responsive Design and more.</p>
      <h4>Soft skills</h4>
      <p>Flexibility, Strong work ethic and team spirit.</p>
    </div>

    );
  }
}

export default About;
