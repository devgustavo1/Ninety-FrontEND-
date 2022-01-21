import React from 'react';
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logao.png";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import './styles.css'


function Landing () {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="div" className="logo-container">
          <img 
            src={logoImg} 
            alt="Ninety"/>
          <h2> Sua plataforma de serviços online</h2>

        </div>
        <img 
          src={landingImg} 
          alt="Plataforma de contratação" 
          className="hero-image"
          />
          <div className="buttons-container">
            <Link to="/contract" className="contract">
              <img src={studyIcon} alt="Contratar"/>
              Contratar serviço
            </Link>
            <Link to="/register" className="register">
              <img src={giveClassesIcon} alt="Registrar"/>
              Registrar serviço
            </Link>
            
          </div>
          
          <span className="total-connections"> 
            Mais de 200 serviços online!   
          </span>
      </div>
    </div>

  )
}

export default Landing;