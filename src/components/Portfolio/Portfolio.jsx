import React from 'react';
import { Link } from 'react-router-dom';

import codingSamplesLogo from './images/coding-samples.gif';

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

          <div className="row">

            <Link to="/coding-samples" className="center">
              <div className="portfolio-item">
                <div className="portfolio-link">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src={codingSamplesLogo} className="img-fluid img-thumbnail center" alt="img"/>
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
