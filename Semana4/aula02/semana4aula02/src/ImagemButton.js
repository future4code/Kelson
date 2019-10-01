import React from 'react';
import './App.css';

function ImagemButton(props) {
  return (
      <button className="ImagemButton">
        <img src={ props.img } alt={ props.imgname } />
        <p>{ props.text }</p>
    </button>
  );
}

export default ImagemButton;