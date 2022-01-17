import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import turnoverImg from './images/turnover.png';

import './Studies.scss';

const Turnover = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Turnover Project</h2>
            <hr className="star-primary"/>
            <img src={turnoverImg} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              The <strong>Turnover Project</strong> gives us statistics-based feedback and machine learning modeling on which employees can leave the company in the future.
              <br/>
              <br/>
              <strong>NOTE:</strong><br/>
              The project notes in the official repository are all in Portuguese (Brazil).
              <br/>
              <br/>
              <a href="https://github.com/drigols/turnover-project" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a>
              <br/>
              <br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>December 2021</strong>
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

export default Turnover;
