import React, { useState } from 'react';
import './Accordian.style.scss';
import { FaPlus } from 'react-icons/fa';

const Accordian = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='accordian'>
      <div className='accordian-row' onClick={() => setIsOpen((prev) => !prev)}>
        <h4>{title}</h4>
        <FaPlus className={`icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      <div className={`accordian-box ${isOpen ? 'show' : ''}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Accordian;
