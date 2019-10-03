import React from 'react';
import './App.css';
import PropType from 'prop-types';

function SmallCard(props) {
  return (
    <div className="SmallCard">
        <img src={ props.img } alt={ props.imgname } />
        <div>
            <p id="label">{ props.label }: </p>
            <p> { props.text }</p>
        </div>
    </div>
  );
}

SmallCard.propType ={
    img: PropType.string.isRequired,
    imgname: PropType.string,
    label: PropType.string.isRequired,
    text: PropType.string.isRequired,
}

export default SmallCard;