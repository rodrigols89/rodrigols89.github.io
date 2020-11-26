import React from 'react';
import { Link } from 'react-router-dom';

import AILogo from './images/ai-algorithms-logo.jpg';
import MathLogo from './images/math-logo.gif';

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

            <Link to="ai-algorithms" className="center">
              <div className="portfolio-item">
                <div className="portfolio-link">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src={AILogo} className="img-fluid img-thumbnail center" alt="img"/>
                </div>
              </div>
            </Link>

            <Link to="math" className="center">
              <div className="portfolio-item">
                <div className="portfolio-link">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src={MathLogo} className="img-fluid img-thumbnail center" alt="img"/>
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
