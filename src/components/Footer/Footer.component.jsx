import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.style.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer>
      <div className='row'>
        <div className='container footer-container'>
          <div className='footer-col'>
            <p>&copy; 2022 Alexander Westham</p>
            <p>Interior Designer</p>
          </div>
          <div className='footer-col'>
            <Link to={'/'} onClick={goToTop}>
              Home
            </Link>
            <Link to={'portfolio'} onClick={goToTop}>
              Portfolio
            </Link>
            <Link to={'about'} onClick={goToTop}>
              About Me
            </Link>
            <Link to={'contact'} onClick={goToTop}>
              Contact
            </Link>
          </div>
          <div className='footer-col'>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <FaInstagram /> Instagram
            </a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
