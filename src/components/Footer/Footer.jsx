import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="footer-col col-md-6">
                        <h3>LOCALIZAÇÃO</h3> {/* OLD = LOCATION */}
                        <hr className="style-four" />
                        <address>
                            Brasil, Estado da Paraíba, CEP: 58398-000<br />
                            Telefone: 55 83 996500112 (WhatsApp)<br />
                            <strong>E-mail: </strong><a href="mailto:rodrigols89.inbox@gmail.com">rodrigols89.inbox@gmail.com</a>
                        </address>
                    </div>

                    <div className="footer-col col-md-6">
                        <h3 className="text-center">Redes Sociais</h3> {/* OLD = Around the Web */}
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
