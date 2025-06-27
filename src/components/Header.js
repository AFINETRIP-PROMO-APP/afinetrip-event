import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => (
  <header className="header" style={{backgroundColor:"white",borderBottom:"1px solid #ccc"}}>
    <div className="header-overlay">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-content">
        <h1 className="title">
          Join the journey with <span className="highlight-brand">AfineTrip</span> at <span className="highlight-brand">Worldcup Katowise 2025!</span>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;