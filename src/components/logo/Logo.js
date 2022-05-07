import React, {Component} from 'react';
import Tilt from 'react-tilt'
import brain from './icons8-millennium-rod.svg'

function Logo() {
  return (
    <div className="Logo">
     <Tilt className="Tilt br2 shadow-1-l" options={{ max : 25, speed: 500, scale: 1 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner pa3"> 
        <img src={brain} alt="Logo"/>   
      </div>
      </Tilt>
    </div>
  );
}

export default Logo;