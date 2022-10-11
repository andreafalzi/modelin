import React from 'react';
import './Error404.scss';

const Error404 = () => {
  return (
    <main>
      <section className='row error-hero'>
        <div className='container error-container'>
          <div className='hero-box'>
            <h1>Ooooopss...</h1>
            <p>You have landed on a wrong page!</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error404;
