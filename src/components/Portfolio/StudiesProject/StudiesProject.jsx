import React from 'react';

import logo from './studies-logo.gif';

const StudiesProject = () => {
  return (
    <React.Fragment>
      <div className="col-sm-4 portfolio-item">
        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img src={logo} className="img-fluid img-thumbnail" alt="img"/>
        </a>
      </div>
    </React.Fragment>
  )
}

export default StudiesProject;
