import React, { Component } from 'react';
import './App.css';
import theRunner from './theRunner.jpg';
import matchingGame from './matchingGame.jpg'
import plovdiv from './plovdiv.jpg'
import pam from './pam.jpg'
import snail from './snail.jpg'
import mockup from './mockup.jpg'


class MyWork extends Component {
  render() {
    return (
      <div className="info">
      <div className='container2'>
      <div className='work'>
      <h1 className='featuredWork'>Featured work</h1>
      </div>
      <div className='box theRunner'>
      <a href='https://github.com/anikonomova/Classic-arcade-game-clone'>
      <img className='projects' src={theRunner} alt='The Runner'></img>
      <h3 class="projectNames">The Runner game</h3></a>
      </div>
      <div className='box matchingGame'>
      <a href='https://github.com/anikonomova/Memory-game-project'>
      <img className='projects' src={matchingGame} alt='Memory game'></img>
      <h3 class="projectNames">Memory game</h3></a>
      </div>
      <div className='box plovdiv'>
      <a href='https://github.com/anikonomova/Plovdiv-map'>
      <img className='projects' src={plovdiv} alt='Restaurants in Plovdiv'></img>
      <h3 class="projectNames">Restaurants in Plovdiv</h3></a>
      </div>
      <div className='box pam'>
      <a href="https://github.com/anikonomova/Pixel-Art-Maker-Udacity">
      <img className='projects' src={pam} alt='Pixel art maker'></img>
      <h3 class="projectNames">Pixel art maker</h3></a>
      </div>
      <div className='box snail'>
      <a href="https://github.com/anikonomova/animal-trading-card">
      <img className='projects' src={snail} alt='Snail card'></img>
      <h3 class="projectNames">Animal trading card</h3></a>
      </div>
      <div className='box mockup'>
      <a href="https://github.com/anikonomova/Mockup-to-article">
      <img className='projects' src={mockup} alt='Mockup to Article'></img>
      <h3 class="projectNames">Mockup to article</h3></a>
      </div>
</div>
</div>
  );
  }
}

export default MyWork;
