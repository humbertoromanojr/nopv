import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'

export default function Login(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Login</label>
        </div>
        
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}