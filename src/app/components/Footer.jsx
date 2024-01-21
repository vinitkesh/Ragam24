// Footer.js
import React from 'react';
import '../styles.css';

import RagamLogo from './Ragam_logo';

const Footer = () => {
  return (
    <div className="footer">
      <div className="nitc-logo">
        <img src="" alt="" />
      </div>
      <RagamLogo />
      <div className="links">
        <div className="insta"></div>
        <div className="x"></div>
        <div className="yt"></div>
        <div className="wp"></div>
      </div>
    </div>
  );
};

export default Footer;
