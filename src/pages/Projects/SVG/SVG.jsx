import React from 'react';
import { Link } from 'react-router-dom';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import './SVG.scss';

const SVG = () => {
  return (
    <div>
      <SecondNavbar />
      <section id="portfolio">
        <div className="container">

          {/*Algebra Section*/}
          <div className="row">

            <div className="col-lg-12 text-center">
              <h2 className="section-title">Algebra</h2>
              <hr/>
            </div>

            <h3 className="subtitle">Fractions</h3>
            <div className="col-lg-12 text-center">
              <Link to="#" className="center">
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

            <h3 className="subtitle">Percentages</h3>
            <div className="col-lg-12 text-center">
              <Link to="#" className="center">
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

          {/*Geometry Section*/}
          <div className="row">

            <div className="col-lg-12 text-center">
              <br/><br/><br/>
              <h2 className="section-title">Geometry</h2>
              <hr/>
            </div>

            <h3 className="subtitle">Plane Geometry</h3>
            <div className="col-lg-12 text-center">
              <Link to="#" className="center">
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

            <h3 className="subtitle">Solid Geometry</h3>
            <div className="col-lg-12 text-center">
              <Link to="#" className="center">
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















        </div>
      </section>
      <Footer />

    </div>
  );
}

export default SVG;
