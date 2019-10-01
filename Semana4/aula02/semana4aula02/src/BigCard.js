import React from 'react';
import './App.css';

function BigCard(props) {
  return (
    <div className="BigCard">
        <img src={ props.img } alt={ props.imgname } />
        <article>
            <h4>{ props.titulo }</h4>
            <p>{ props.text }</p>
        </article>
    </div>
  );
}

export default BigCard;