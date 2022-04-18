import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import jspImg from './images/jsp-logo.png';

import './JSP.scss';

const JSP = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Job Salary Prediction</h2>
            <hr className="star-primary"/>
            <img src={jspImg} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
            The <strong>Job Salary Prediction</strong> project aims to develop a solution to predict salaries from job advertisements. The main steps
of the project were Preliminary Data Analysis, Pre-Processing, Training and Validation of Machine Learning models.              <br/>
              <br/>
              <strong>NOTE:</strong><br/>
              The project notes in the official repository are all in Portuguese (Brazil).
              <br/>
              <br/>
              <a href="https://github.com/drigols/job-salary-prediction" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a>
              <br/>
              <br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong><a href="https://www.gria.io/">GRIA</a></strong>
              </li>
              <li>
                Date: <strong>January 2022</strong>
              </li>
              <li>
                Service: <strong>Challenge</strong>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default JSP;
