import React, { useState } from 'react';

import logo from './studies-logo.gif';

import {
  Modal
} from 'react-bootstrap';

const Studies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="col-sm-4 portfolio-item">
        <div onClick={handleShow} className="portfolio-link">
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img src={logo} className="img-fluid img-thumbnail" alt="img"/>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl">

        <Modal.Header>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Personal project</h5>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-body">
            <h2 className="text-center">Studies</h2>
            <hr className="star-primary"/>
            <img src={logo}  className="mx-auto d-block border border-dark" alt="img"/>
            <div>
              Studies Project. All my <strong>theoretical</strong> and <strong>practical</strong> studies are here. Examples:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Programming Languages</li>
                  <li>Web Development</li>
                  <li>Artificial Intelligence algorithms (ML, DP)</li>
                  <li>Mathematics</li>
                  <li>Guides</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/drigols/studies" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a><br/><br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>August 2020 to the present day</strong>
              </li>
              <li>
                Service: <strong>Studies - Theory and Practice</strong>
              </li>
            </ul>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="modal-footer">
              <button onClick={handleClose} type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default Studies;
