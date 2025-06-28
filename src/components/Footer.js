import React from 'react';
import Arconlogo from '../assets/Arconlogo.png';
import TransparentKIFlogo from '../assets/TransparentKIFlogo.png';
const Footer = () => (
  <footer
    style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    {/* Left Logo */}
    <img
      src={Arconlogo}
      alt="Left Logo"
      style={{ height: '50px' }}
    />

    {/* Center Text */}
    <p style={{ margin: 0, flex: 1, textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} Afinetrip. All rights reserved.
    </p>

    {/* Right Logo */}
    <img
      src={TransparentKIFlogo}
      alt="Right Logo"
      style={{ height: '40px' }}
    />
  </footer>
);

export default Footer;
