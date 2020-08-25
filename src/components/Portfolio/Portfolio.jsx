import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/studies-logo.gif';

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

          <Link to="/studies-project">
            <div className="col-sm-4 portfolio-item">
              <div className="portfolio-link">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src={logo} className="img-fluid img-thumbnail" alt="img"/>              
              </div>
            </div>
          </Link>
        
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
