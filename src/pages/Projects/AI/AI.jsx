import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import aiLogo from './images/logo.jpg';

import './AI.scss';

const AI = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Artificial Intelligence</h2>
            <hr className="star-primary"/>
            <img src={aiLogo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>

              My <i>theoretical</i> and <i>practical</i> <strong>Artificial Intelligence</strong> studies:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Machine Learning</li>
                  <li>Neural Nets & Deep Learning</li>
                  <li>Reinforcement Learning</li>
                  <li>Computer Vision</li>
                  <li>Mathematics for A.I</li>
                  <li>Useful Libraries
                    <ul>
                      <li>NumPy</li>
                      <li>Pandas</li>
                      <li>Matplotlib</li>
                      <li>Scikit-Learn</li>
                      <li>TensorFlow</li>
                      <li>Others...</li>
                    </ul>
                  </li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/artificial-intelligence" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>September 2021 to the present day</strong>
              </li>
              <li>
                Service: <strong>Studies</strong>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default AI;
