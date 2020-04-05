import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import about01 from '../../assets/images/about01.png';
import about02 from '../../assets/images/about02.png';
import about03 from '../../assets/images/about03.png';

export default function AboutMore(props) {

  return (
    <div className="main-content">
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Sobre</label>
          <p className="center">
          Disponível para Android, iOS e web, o NoPV é uma plataforma para contratação de serviços, pois a Covid-19 está acelerando a transformação digital mais do que o Coach Agil 2.0. Com a quarentena, muitas profissões estão precisando se adaptar ao agendamento, videoconferência e pagamento online. Saiba Mais 
          <Link to="/aboutmore">Saiba Mais</Link>
          </p>
          
        </div>
        
      </div>

      <div className="aboutNoPv">
        <img src={about01} className="image-about01" alt="" />
        <img src={about02} className="image-about02" alt="" />
        <img src={about03} className="image-about03" alt="" />
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}