// Footer.js
import React from 'react';
import '../styles.css';

import RagamLogo from './Ragam_logo';

import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className="nitc">
        <div className="nitclogo">
          <img src="./links/image 8.svg" alt="NITC" />
        </div>
        <RagamLogo />
        
      </div>

      <div className="footer_links">
        <a href='/' ><img src="./links/image 5.svg" alt="" /></a>
        <a href='/' ><img src="./links/image 3.svg" alt="" /></a>
        
        <a href='/' ><img src="./links/image 6.svg" alt="" /></a>
          <a href='/' ><img src="./links/image 7.svg" alt="" /></a>
      </div>

      <div className="address">
        <h1>National Institute of Technology, Calicut</h1>
        <h2>Calicut Mukkam Road, Kattangal </h2>
        <h2>Kerala 673601</h2>
      </div>

    </div>
  );
};

export default Footer;