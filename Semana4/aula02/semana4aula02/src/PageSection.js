import React from 'react';
import './App.css';
import BigCard from './BigCard';
import SmallCard from './SmallCard';
import ImagemButton from './ImagemButton';
import email from './img/email.svg';

function PageSection(props) {
  return (
    <div className="PageSection">
        <h2>{ props.titulo }</h2>
        { props.children }
    </div>
  );
}

export default PageSection;