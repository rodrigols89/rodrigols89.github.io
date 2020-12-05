import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import logo from './images/math-logo.gif';

import './Math.scss';

const Math = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Math</h2>
            <hr className="star-primary"/>
            <img src={logo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
            My theoretical and practical studies related to <strong>mathematics</strong>:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Algebra</li>
                  <li>Statistics & Probability</li>
                  <li>Precalculus</li>
                  <li>Linear Algebra</li>
                  <li>Differential Calculus</li>
                  <li>Differential Equations</li>
                  <li>Multivariable Calculus</li>
                  <li>Useful Libraries (NumPy, Pandas, Matplotlib)</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/math" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
              <strong>NOTE:</strong><br/>
              Many of my studies are in Brazilian Portuguese... <a href="https://github.com/drigols/math/tree/master-pt-br"><strong>You can see here</strong></a>.<br/><br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>November 2020 to the present day</strong>
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

export default Math;
