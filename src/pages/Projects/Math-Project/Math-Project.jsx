import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import logo from './images/math-logo.gif';

import './Math-Project.scss';

const MathProject = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Math - Theory & Practice</h2>
            <hr className="star-primary"/>
            <img src={logo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              <strong>Mathematics</strong> is a very important requirement for Software Engineers, Data Scientists, Data Engineers, And so on...<br/>
              Knowing this I created a mathematical project to store my studies and codes about math.
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Algebra</li>
                  <li>Statistics & Probability</li>
                  <li>Precalculus</li>
                  <li>Linear Algebra</li>
                  <li>Differential Calculus</li>
                  <li>Integral Calculus</li>
                  <li>Differential Equations</li>
                  <li>Multivariable Calculus</li>
                  <li>Useful Libraries (Like: NumPy, Pandas, Matplotlib, And so on...)</li>
                </ul>
              </ul>
              <strong>NOTE:</strong><br/>
              Many of my studies are in Brazilian Portuguese... <a href="https://github.com/drigols/studies/tree/master-pt-br/modules/math"><strong>You can see here</strong></a>.
              <br/><br/>
              <a href="https://github.com/drigols/math" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
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

export default MathProject;
