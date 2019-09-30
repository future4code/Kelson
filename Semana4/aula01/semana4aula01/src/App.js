import React from 'react';
import video1 from './img/video1.png'
import video2 from './img/video2.png'
import video3 from './img/video3.png'
import video4 from './img/video4.png'
import video5 from './img/video5.png'
import video6 from './img/video6.png'
import video7 from './img/video7.png'
import video8 from './img/video8.png'
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <h1><a href="">FutureTube</a> </h1>
          <input type="search"  placeholder="Busca"/>
      </header>
      
      <section>
          <nav>
              <div id="navsuperior">
                  <a href="">Inicio</a>
                  <a href="">Em alta</a>
                  <a href="">Inscrições</a>
                  <a href="">Originais</a>
              </div>
              <div id="navinferior">
                  <a href="">Biblioteca</a>
                  <a href="">Histórico</a>
              </div>
          </nav>
          <main>
              <a href="">
                  <img className="imgdechamada" src= {video1} alt="Video 1"/>
                  <p>Vídeo 1</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video2} alt="Video 2"/>
                  <p>Vídeo 2</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video3} alt="Video 3"/>
                  <p>Vídeo 3</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video4} alt="Video 4"/>
                  <p>Vídeo 4</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video5} alt="Video 5"/>
                  <p>Vídeo 5</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video6} alt="Video 6"/>
                  <p>Vídeo 6</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video7} alt="Video 7"/>
                  <p>Vídeo 7</p>
              </a>
              <a href="">
                  <img className="imgdechamada" src= {video8} alt="Video 8"/>
                  <p>Vídeo 8</p>
              </a>
          </main>
      </section>

      <footer>
          <p>Oi!Eu morro no footer!</p>

      </footer>
    </div>
  );
}

export default App;
