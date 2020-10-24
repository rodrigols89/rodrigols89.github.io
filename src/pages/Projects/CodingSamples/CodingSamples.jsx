import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import logo from './images/coding-samples.gif';

import './CodingSamples.scss';

const CodingSamples = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Coding Samples</h2>
            <hr className="star-primary"/>
            <img src={logo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              My useful codes & samples:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Programming Languages</li>
                  <li>Web Development</li>
                  <li>Game Development</li>
                  <li>Artificial Intelligence algorithms (ML, DP)</li>
                  <li>Mathematics</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/coding-samples" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
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

export default CodingSamples;
