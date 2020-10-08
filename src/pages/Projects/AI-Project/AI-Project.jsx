import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import logo from './images/ml-logo.gif';

import './AI-Project.scss';

const AIProject = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Artificial Intelligence</h2>
            <hr className="star-primary"/>
            <img src={logo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              My <strong>Artificial Intelligence Algorithms</strong> studies and practices.
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Machine Learning</li>
                  <li>Neural Nets & Deep Learning</li>
                  <li>Deep/+Reinforcement Learning</li>
                  <li>Tips & Tricks</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/artificial-intelligence" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>October 2020 to the present day</strong>
              </li>
              <li>
                Service: <strong>Studies - Theory and Practice</strong>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default AIProject;
