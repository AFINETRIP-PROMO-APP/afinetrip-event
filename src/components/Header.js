import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => (
  <header className="header" style={{backgroundColor:"white",borderBottom:"1px solid #ccc"}}>
    <div className="header-overlay">
      <div style={{display: "inline-block", padding: 0,
    margin: 0}}>
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-content">
        <h1 className="title">
          Join the journey with <span className="highlight-brand">AfineTrip</span> at Worldcup Katowice 2025!
        </h1>
      </div>
    </div>
  </header>
);

export default Header;