import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.components';
import './Portfolio.scss';

const Portfolio = ({ data, url }) => {
  return (
    <main>
      <section className='row section'>
        <div className='container portfolio-container'>
          <h2>Portfolio</h2>
          <p>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>
          <div className='portfolio-grid'>
            {data.map((item) => (
              <div className='portfolio-box' key={item.id}>
                <div className='box-content'>
                  <h3>{item.title}</h3>
                  <p>
                    <em>{item.headline}</em>
                  </p>
                </div>
                <div className='box-image'>
                  <img src={`${url}${item.teaser}`} alt={item.title} />
                  <div className='portfolio-btn'>
                    <Link to={`${item.id}`}>
                      <Button>Explore</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>Need more Details</h2>
          <a href='mailto:info@idp.com'>info@idp.com</a>
          <p>Contact me for details on creating and managing design projects, project features, services and prices</p>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
