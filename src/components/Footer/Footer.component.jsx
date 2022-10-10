import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.style.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <div className='container footer-container'>
          <div className='footer-col'>
            <p>&copy; 2022 Alexander Westham</p>
            <p>Interior Designer</p>
          </div>
          <div className='footer-col'>
            <Link to={'/'}>Home</Link>
            <Link to={'portfolio'}>Portfolio</Link>
            <Link to={'about'}>About Me</Link>
            <Link to={'contact'}>Contact</Link>
          </div>
          <div className='footer-col'>
            <Link>
              <FaInstagram /> Instagram
            </Link>
            <Link>
              <FaFacebook /> Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
