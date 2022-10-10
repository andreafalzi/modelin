import React from 'react';
import { Link } from 'react-router-dom';
import Accordian from '../../components/Accordian/Accordian.component';
import Button from '../../components/Button/Button.components';
import './Home.scss';

const Home = () => {
  const accordianText = [
    { title: 'Design Projects', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Set and interior', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Decoration', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Supervision', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
  ];
  return (
    <main>
      <section className='row home-hero'>
        <div className='container home-container'>
          <div className='hero-box'>
            <h1>Modern elegant and luxurios interior</h1>
            <p>Individual approach to design of a private apartaments and public areas</p>
            <Link to={'portfolio'}>
              <Button>Se Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>Offering you a full range of interior and furniture design services</h2>
          <p>
            Alexander Westham <br /> Interior Designer
          </p>
          <p>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>Services</h2>
          {accordianText.map((accordian, index) => (
            <Accordian key={index} title={accordian.title} text={accordian.text} />
          ))}
          <span className='bottom-border'></span>
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

export default Home;
