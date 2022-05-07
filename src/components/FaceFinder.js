import React, {Component} from 'react';
import './FaceFinder.css';

function FaceFinder({imageUrl, box}) {
  return (
    <div className='FaceFinder centre'>
      <div className='absolute ma2'>
        <img id={'imgface'} src={imageUrl} alt={''} width='300px' height={'auto'}></img>
        <div style={{inset: box}} className='bounding-box'></div>
      </div>
    </div>
  );
}

export default FaceFinder;

// inset: box.topPosition box.leftPosition box.rightPosition box.bottomPosition