import React from 'react';
import './App.css';

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

export default SmallCard;