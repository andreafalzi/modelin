import React, { useState } from 'react';
import './Navigation.style.scss';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className='row'>
        <div className='container'>
          <nav>
            <Link to={'/'} onClick={() => setIsOpen(false)}>
              <img src='/assets/logo/logo-modelin.svg' alt='logo' className='logo' />
            </Link>
            {isOpen ? <MdClose className='menu-icon' onClick={() => setIsOpen((prev) => !prev)} /> : <MdMenu className='menu-icon' onClick={() => setIsOpen((prev) => !prev)} />}
          </nav>
        </div>
        <div className={`menu-slide ${isOpen ? 'show' : ''}`}>
          <ul>
            <li className='menu-link'>
              <Link onClick={() => setIsOpen((prev) => !prev)} to={'/'}>
                Home
              </Link>
            </li>
            <li className='menu-link'>
              <Link onClick={() => setIsOpen((prev) => !prev)} to={'portfolio'}>
                Portfolio
              </Link>
            </li>
            <li className='menu-link'>
              <Link onClick={() => setIsOpen((prev) => !prev)} to={'about'}>
                About Me
              </Link>
            </li>
            <li className='menu-link'>
              <Link onClick={() => setIsOpen((prev) => !prev)} to={'contact'}>
                Contact
              </Link>
            </li>
            <li className='menu-link'>
              <a href='https://instagram.com' target={'_blank'} rel='noreferrer'>
                <FaInstagram />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
