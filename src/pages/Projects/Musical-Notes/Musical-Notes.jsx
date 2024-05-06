import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import musicalNotesImg from './images/musical-notes-logo-300x200.jpg';

import './Musical-Notes.scss';

const MusicalNotes = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Musical Notes</h2>
            <hr className="star-primary"/>
            <img src={musicalNotesImg} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
            The <strong>Musical Notes</strong> project aims to provide a Command-Line Interface (CLI) to help music students and professionals easily access scales, chord formations, and harmonic fields. Other project objectives were:<br/>
                <ul>
                  <li>
                      To practice developing a CLI using Typer and Rich libraries.
                  </li>
                  <li>
                      To practice developing software documentation with MKDocs and ReadTheDocs. You can view the project documentation by clicking here: <a href="https://musical-notes.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Musical Notes - Documentation</a>.
                  </li>
                  <li>
                      To practice Continuous Integration (CI) with GitHub Actions.
                  </li>
                  <li>
                      To practice testing and code coverage using Pytest and Codecov.
                  </li>
                  <li>
                      Finally, to publish the project on PyPi. You can follow the package by clicking here: <a href="https://pypi.org/project/musical-notes/0.1.0/" target="_blank" rel="noopener noreferrer">Musical Notes - PyPi</a>
                  </li>
                </ul>
              <a href="https://github.com/rodrigols89/musical-notes"  target="_blank" rel="noopener noreferrer"><span className="section-title"> → [Project in GitHub]</span></a>
              <br/>
              <br/>
              <br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>April 2023</strong>
              </li>
              <li>
                Service: <strong>Open-Source</strong>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default MusicalNotes;
