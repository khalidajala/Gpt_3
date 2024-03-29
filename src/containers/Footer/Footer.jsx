import React from 'react'
import './footer.css';
import gpt3logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to steo into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo' />
          <p>Cretcherwoord K12 !82 DK Alknjkcb, ALl rights revised</p>
        </div>
        <div className='gpt3__foter-links_div'>
          <h4>Links</h4>
          <p>Overrons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__foter-links_div'>
          <h4>Company</h4>
          <p>Terms and condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__foter-links_div'>
          <h4>Get in touch</h4>
          <p>Cretcherwoord K12 !82 DK Alknjkcb</p>
          <p>Number</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2024 GPT-3, All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
