import React, { useState } from 'react';
import './Lightbox.style.scss';
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Lightbox = ({ close, gallery, current, url }) => {
  const currentSlide = gallery.find((el) => gallery.indexOf(el) === current);

  const [mainSlide, setMainSlide] = useState(currentSlide);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = gallery.length - 1;
    } else if (newIndex >= gallery.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    setMainSlide(gallery.find((el) => gallery.indexOf(el) === newIndex));
  };

  return (
    <div className='lightbox'>
      <MdClose className='close' onClick={close} />
      <div className='lightbox-gallery'>
        <div className='lightbox-main'>
          <MdKeyboardArrowLeft className='arrow arrow-left' onClick={() => updateIndex(activeIndex - 1)} />
          <div className='lightbox-main-box'>
            <img src={`${url}${mainSlide?.image}`} alt={`location${current}`} />
          </div>
          <MdKeyboardArrowRight className='arrow arrow-right' onClick={() => updateIndex(activeIndex + 1)} />
        </div>

        <div className='lightbox-thumbnails'>
          {gallery.map((item, index) => (
            <div className={`lightbox-thumbnails-box`} key={index}>
              <img src={`${url}${item.image}`} alt={`location${index}`} onClick={() => setMainSlide(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
