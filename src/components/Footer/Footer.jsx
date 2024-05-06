import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">

          <div className="footer-col col-md-6">
            <h3>Location</h3>
            <hr className="style-four" />
            <address>
              Brazil, State of Paraíba, Zip code: 58398-000<br />
              Phone number: 55 83 996500112 (WhatsApp)<br />
              Phone number: 55 83 996241663 (Call)<br />
              <strong>E-mail: </strong><a href="mailto:rodrigols89.inbox@gmail.com">rodrigols89.inbox@gmail.com</a>
            </address>
          </div>

          <div className="footer-col col-md-6">
            <h3 className="text-center">Around the Web</h3>
            <hr className="style-four" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rodrigols89" className="btn-social btn-outline" title="Linkedin" target="_blank" rel="noopener noreferrer"><span className="sr-only">Linkedin</span><i className="fa fa-fw fa-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/rodrigols89" className="btn-social btn-outline" title="GitHub" target="_blank" rel="noopener noreferrer"><span className="sr-only">GitHub</span><i className="fa fa-fw fa-github"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
