import React from 'react';
import { Link } from 'react-router-dom';
import Accordian from '../../components/Accordian/Accordian.component';
import Button from '../../components/Button/Button.components';
import './About.scss';

const About = () => {
  const accordianText = [
    { title: 'Design Projects', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Set and interior', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Decoration', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
    { title: 'Supervision', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, optio ab vero repellendus blanditiis totam maxime quae asperiores voluptatum. Quam saepe neque culpa nam a unde ea perspiciatis modi hic perferendis, ullam magni eveniet cumque dicta impedit possimus eos quibusdam aspernatur consequatur iure illum. Id commodi nobis fugit eligendi eius.' },
  ];
  return (
    <main>
      <section className='row about-hero'>
        <div className='container home-container'>
          <div className='hero-box'>
            <h1>Alexander Westham</h1>
            <p>Professional Interior Designer. Offering you a full range of interior and furniture design services. Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world. In my projects I strive to create a perfect interior for you. I often ask about your habits, preferences, hobbies, and other activities. I believe that personal approach is the only way that helps to create houses, offices, open spaces, that contain everything you need and meet your expectations.</p>
            <Link to={'portfolio'}>
              <Button>Se Portfolio</Button>
            </Link>
          </div>
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
    </main>
  );
};

export default About;
