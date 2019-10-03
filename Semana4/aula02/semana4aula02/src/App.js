import React from 'react';
import './App.css';
import PageSection from './PageSection';
import BigCard from './BigCard';
import SmallCard from './SmallCard';
import ImagemButton from './ImagemButton';
import avatar from './img/avatar.png';
import email from './img/email.svg';
import endereco from './img/house.svg';
import seta from './img/expand.svg';
import facebook from './img/facebook.png';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';

function App() {
  return (
    <div className="App">
      
      <PageSection titulo='Dados Pessoais'>
        <BigCard img={ avatar } imgname='Avatar' titulo='Kelson' text='Test' />
        <SmallCard img={ email } imgname='Email' label='Email' text='kelsoncarmozine@globo.com'/>
        <SmallCard img={ endereco } imgname='Endereço' label='Endereço' text='Rua da Vereda, 50' />
        <ImagemButton img={ seta } imgname='Seta' text='Ver Mais' />
      </PageSection> 
      
      <PageSection titulo='Experiência Proficional'>
        <BigCard img={ logo1 } imgname='Facebook' titulo='Facebook' text='No Facebook você pode se conectar e compartilhar o que quiser com quem é importante em sua vida' />
        <BigCard img={ logo2 } imgname='Microsoft' titulo='Microsot' text='A gente inova, você transforma' />
      </PageSection>

      <PageSection titulo='Redes Sociais'>
        <ImagemButton img={ facebook } imgname='Facebook' text='Facebook'/>
      </PageSection>

    </div>
  );
}

export default App;
