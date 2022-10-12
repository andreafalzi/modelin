import React from 'react';
import { useParams } from 'react-router-dom';
import Error404 from '../Error404/Error404';
import './PortfolioID.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

const PortfolioID = ({ data, url }) => {
  let params = useParams();

  const singlePortfolio = data.find((el) => el.id === parseInt(params.id));

  const { cover, description, gallery, headline, placement, title } = singlePortfolio;

  const { year, area, address } = placement;

  const heroStyle = {
    backgroundImage: `url(${url}${cover})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // height: '100vh',
  };

  return singlePortfolio ? (
    <main>
      <section className='row portfolio-id-hero' style={heroStyle}>
        <div className='container portfolio-id-container'>
          <h1 className='hero-title'>{title}</h1>
          <MdKeyboardArrowDown />
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>{headline}</h2>
          <p>{description}</p>
          <div className='paragraph'>
            <p>
              <strong>Year</strong>
            </p>
            <p>{year}</p>
          </div>
          <div className='paragraph'>
            <p>
              <strong>Area</strong>
            </p>
            <p>{area}</p>
          </div>
          <div className='paragraph'>
            <p>
              <strong>Address</strong>
            </p>
            <p>{address}</p>
          </div>
          <h2>Gallery</h2>
          <div className='portfolio-gallery-grid'>
            {gallery.map((img, index) => (
              <div className='portfolio-gallery-card'>
                <span className='counter'>
                  {index + 1} / {gallery.length}
                </span>
                <img key={index} src={`${url}${img.image}`} alt={`location${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  ) : (
    <Error404 />
  );
};

export default PortfolioID;
