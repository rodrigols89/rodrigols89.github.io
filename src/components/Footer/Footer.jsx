import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row"> 

          <div className="footer-col col-md-4">
            <h3>Location</h3>
            <hr className="style-four"/>            
            <address>
              Remígio - PB, CEP: 58398-000<br/>
              Luiz Barbosa, Nº 30, Centro<br/>
              TIM - (83) 996500112, (83) 998819364<br/>
              <strong>E-mail: </strong><a href="mailto:#">drigols.creative@gmail.com</a>
            </address>
          </div>

          <div className="footer-col col-md-8">
            <h3 className="text-center">Around the Web</h3>
            <hr className="style-four"/>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/drigols" className="btn-social btn-outline" rel="noopener" title="Linkedin"><span className="sr-only">Linkedin</span><i className="fa fa-fw fa-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/drigols" className="btn-social btn-outline" rel="noopener" title="GitHub"><span className="sr-only">GitHub</span><i className="fa fa-fw fa-github"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://stackoverflow.com/users/8047904/drigols" className="btn-social btn-outline" rel="noopener" title="StackOverflow"><span className="sr-only">StackOverflow</span><i className="fa fa-fw fa-stack-overflow"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
