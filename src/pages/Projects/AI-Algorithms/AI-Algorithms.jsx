import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import logo from './images/ai-algorithms-logo.jpg';

import './AI-Algorithms.scss';

const AIAlgorithms = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">A.I - Algorithms</h2>
            <hr className="star-primary"/>
            <img src={logo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              My <i>theoretical</i> and <i>practical</i> studies on <strong>Artificial Intelligence Algorithms</strong>:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Machine Learning</li>
                  <li>Neural Nets & Deep Learning</li>
                  <li>Reinforcement Learning</li>
                  <li>Deep Reinforcement Learning</li>
                  <li>Computer Vision</li>
                  <li>Tips and Tricks</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/ai-algorithms" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
              <strong>NOTE:</strong><br/>
              Many of my studies are in Brazilian Portuguese... <a href="https://github.com/drigols/ai-algorithms/tree/master-pt-br"><strong>You can see here</strong></a>.<br/><br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>October 2020 to the present day</strong>
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

export default AIAlgorithms;
