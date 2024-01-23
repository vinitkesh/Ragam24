
import React from 'react';
import RagamLogo from '../components/Ragam_logo';
import Footer from '../components/Footer';

import Contactuscard from '../components/Contactuscard';

import '../contact.css'

const page = () => {
  return (
    <>

      <div className="navbar">
          <RagamLogo />
          <div className="links">
          <a href="/">Home</a>
          <a href="/Contact">Contact Us</a>
          </div>
      </div>


      <div className='contact'>
      <h2>Contact Us</h2>
        <div className="cards">
        <Contactuscard
          img="./contactus/Frame 33.svg" 
          by="BY PHONE"
          details="+91 9994058168"
        />

        <Contactuscard
          img="./contactus/Frame 34.svg" 
          by="FIND US"
          details="National Institute of Technology Calicut, Kerala 673601"
        />

        <Contactuscard
          img="./contactus/Frame 35.svg"
          by="BY EMAIL"
          details="contactus@nitc.ac.in"
        />
        </div>
        
    </div>

      
        
        <Footer />
    </>
  )
}

export default page