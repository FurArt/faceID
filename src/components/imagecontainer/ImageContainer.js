import React, {Component} from 'react';
function ImageContainer({onIntputChange, onSubmit}) {
  return (
    <div className="ImageContainer">
        <p className='f3'>{'This Magic staff will detect face on image!'}</p>
        <p className='f4'>{'Send url with foto with face'}</p>
     <div className='centre'>
      <div className='form pa4 shadow-5 br3'>
        <input type={'text'}  placeholde={'Give url you foto'} className='f3 pa2 w-70' onChange={onIntputChange}/>
        <button className='f3 pa2 w-30 grow f4 link dib white bg-light-purple h-100' 
        onClick={onSubmit}>{'Detect'}</button>
      </div>
     </div>
    </div>
  );
}

export default ImageContainer;