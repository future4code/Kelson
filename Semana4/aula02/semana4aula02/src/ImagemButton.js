import React from 'react';
import './App.css';
import PropType from 'prop-types';

function ImagemButton(props) {
  return (
      <a className="ImagemButton">
        <img src={ props.img } alt={ props.imgname } />
        <p>{ props.text }</p>
    </a>
  );
}

ImagemButton.propType ={
    img: PropType.string.isRequired,
    imgname: PropType.string,
    text: PropType.string.isRequired,
}

export default ImagemButton;