import React from 'react';
import logo from '../assets/logo.png';
import footballFieldBg from '../assets/football-field-bg.jpg'; // Add your image to assets folder
import '../styles/Header.css';

const Header = () => (
  <header className="header" style={{backgroundImage: `url(${footballFieldBg})`}}>
    <div className="header-overlay">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-content">
        <h1 className="title">
          Join the journey with <span className="highlight-brand">AfineTrip</span> at <span className="highlight-event">Worldcup Katowise 2025!</span>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;