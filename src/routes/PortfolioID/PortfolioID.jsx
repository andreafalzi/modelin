import React from 'react';
import { useParams } from 'react-router-dom';
import Error404 from '../Error404/Error404';
import './PortfolioID.scss';

const PortfolioID = ({ data }) => {
  let params = useParams();

  const singlePortfolio = data.find((el) => el.id === parseInt(params.id));

  const { cover, description, gallery, headline, placement, title } = singlePortfolio;

  const { year, area, address } = placement;

  const heroStyle = {
    backgroundImage: `url(${cover})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // height: '100vh',
  };

  return singlePortfolio ? (
    <main>
      <section className='row portfolio-id-hero' style={heroStyle}>
        <div className='container portfolio-id-container'>
          <div className='hero-box'>
            <h1>{title}</h1>
          </div>
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>{headline}</h2>
          <p>{description}</p>
          <p>
            <strong>Year</strong>
          </p>
          <p>{year}</p>
          <p>
            <strong>Area</strong>
          </p>
          <p>{area}</p>
          <p>
            <strong>Address</strong>
          </p>
          <p>{address}</p>
        </div>
        <div className='gallery-grid'>
          {gallery.map((img, index) => (
            <img key={index} src={img.image} alt={`location${index}`} />
          ))}
        </div>
      </section>
    </main>
  ) : (
    <Error404 />
  );
};

export default PortfolioID;
