import React from 'react';

import StudiesProject from './StudiesProject/StudiesProject';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Portfolio</h2>
            <hr/>
          </div>
        </div>

        <div className="row">
          <StudiesProject />
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
