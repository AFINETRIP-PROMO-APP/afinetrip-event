import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import Lottie from "lottie-react";
import backgroundAnim from '../animations/mapPlane.json'

const Header = () => (
  <header className="header" style={{backgroundColor:"white",borderBottom:"1px solid #ccc"}}>
    <div className="header-overlay">
      <Lottie
        animationData={backgroundAnim}
        loop
        autoplay
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          objectFit: 'cover',
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-content">
        <h1 className="title">
          Join the journey with <span className="highlight-brand">AfineTrip</span> at <span className="highlight-brand">Worldcup Katowice 2025!</span>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;