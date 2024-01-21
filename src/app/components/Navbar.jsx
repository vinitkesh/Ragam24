// Navbar.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';
import RagamLogo from './Ragam_logo';


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <RagamLogo />
      <div className="links">
      <a href="../page">Home</a>
      <a href="../contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
