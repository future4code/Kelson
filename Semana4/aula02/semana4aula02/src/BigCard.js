import React from 'react';
import './App.css';
import PropType from 'prop-types';

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

BigCard.propType ={
    img: PropType.string.isRequired,
    imgname: PropType.string,
    titulo: PropType.string.isRequired,
    text: PropType.string.isRequired,
}

export default BigCard;