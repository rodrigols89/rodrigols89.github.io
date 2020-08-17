import React from 'react';

import Studies from './projects/studies/Studies';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Portfolio</h2>
              <hr/>
            </div>
          </div>

          <Studies />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
