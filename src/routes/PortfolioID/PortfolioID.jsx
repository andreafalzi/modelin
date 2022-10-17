import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error404 from '../Error404/Error404';
import './PortfolioID.scss';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import Lightbox from '../../components/Lightbox/Lightbox.component';

const PortfolioID = ({ data, url }) => {
  let params = useParams();
  const [currentSlide, setCurrentSlide] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (e) => {
    document.body.style.overflow = 'hidden';
    setCurrentSlide(parseInt(e.target.getAttribute('name')));
    setIsOpen((prev) => !prev);
  };

  const closeLightbox = () => {
    document.body.style.overflow = 'auto';
    setIsOpen((prev) => !prev);
  };

  const singlePortfolio = data.find((el) => el.id === parseInt(params.id));

  const { description, gallery, headline, placement, title, teaser } = singlePortfolio;

  const { year, area, address } = placement;

  const heroStyle = {
    backgroundImage: `url(${url}${teaser})`,
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
              <div className={`portfolio-gallery-card gallery-image-${index + 1}`} key={index} onClick={openLightbox} name={index}>
                <span className='counter'>
                  {index + 1} / {gallery.length}
                </span>
                <div className='portfolio-gallery-card-image-box'>
                  <img src={`${url}${img.image}`} alt={`location${index}`} />
                  <span className='view'>
                    <MdSearch />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpen && <Lightbox close={closeLightbox} gallery={gallery} current={currentSlide} url={url} />}
    </main>
  ) : (
    <Error404 />
  );
};

export default PortfolioID;
