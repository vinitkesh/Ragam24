
'use client'
import React from 'react';
import Navbar from './components/Navbar';
import './globals.css';
import './styles.css';
import Frame89 from './components/Frame89';
import Frame90 from './components/Frame90';
import Frame101 from './components/Frame101';
import Frame100 from './components/Frame100';
import Footer from './components/Footer';

import RagamLogo from './components/Ragam_logo';



const Page = () => {
  return (
    <>  
      <div className="navbar">
        <RagamLogo />
        <div className="links">
        <a href="/">Home</a>
        <a href="/Contact">Contact Us</a>
        </div>
      </div>

      <Frame89 />
      <Frame90 />
      <Frame101 />
      <Frame100 />
      <Footer />
      
    </>
  );
};

export default Page;
