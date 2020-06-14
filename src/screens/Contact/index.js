import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import button from '../../assets/images/button.png';
import moises from '../../assets/images/moises.png';
import mariana from '../../assets/images/mariana.png';
import karla from '../../assets/images/karla.png';
import bruno from '../../assets/images/bruno.png';
import jrdev from '../../assets/images/jrdev.png';

export default function Contact(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Contato</label>
          <p className="center">
          Agradecemos qualquer feedback ou ideia. Também estamos buscando apoio para que essa solução ajude o máximo possível de pessoas. Então não hesite em entrar em contato conosco. Clique no botão abaixo para entrar em contato.
          <br />
          </p>


          <label className="title">Time</label>
          <br />
          <div className="time">
            <a href="https://www.linkedin.com/in/junior-dev" target="_blank">
              <img src={jrdev} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mrncstt" target="_blank">
              <img src={mariana} className="image-price02" alt="Mariana Costa" />
            </a>
            <a href="https://www.linkedin.com/in/moisesrlimadesigndf" target="_blank">
              <img src={moises} className="image-price03" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/karla-pereira" target="_blank">
              <img src={karla} className="image-price03" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/brunoeid/" target="_blank">
              <img src={bruno} className="image-price03" alt="" />
            </a>
          </div>
            
        </div>
        
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}