import React, { useEffect, useState } from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://modelin.webmcdm.dk/portfolios';
    // const options = {
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // };

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <main>
      <section className='row'>
        <div className='container portfolio-container'>
          <h1>Portfolio</h1>
          <p>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>
          <div className='portfolio-grid'>
            {data.map((item) => (
              <div className='portfolio-box' key={item.id}>
                <img src={item.teaser} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.headline}</p>
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
