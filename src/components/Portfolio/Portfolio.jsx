import React from 'react';
import { Link } from 'react-router-dom';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Studies Projects</h2>
              <hr/>
            </div>
          </div>

          <div className="row">

            <Link to="" className="center">
              <div className="portfolio-item">
                <div className="portfolio-link">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src="https://image.freepik.com/free-photo/coming-soon-neon-sign-purple-blue-glow-neon-text-brick-wall-lit-by-neon-lamps-night-lighting-wall_124343-10.jpg" className="img-fluid img-thumbnail center" alt="img"/>
                </div>
              </div>
            </Link>

          </div>
        
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
