import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import studiesLogo from './images/studies-logo-300x200.gif';

import './Studies.scss';

const Studies = () => {
    return (
        <div>
            <SecondNavbar />

            <div className="container-fluid project">
                <div className="row modal-body">

                    <div className="col-sm-6">
                        <h2 className="text-center">Studies</h2>
                        <hr className="star-primary" />
                        <img src={studiesLogo} className="img-fluid img-thumbnail center" alt="img" />
                    </div>

                    <div className="col-sm-6 text-project">
                        <div>
                            O projeto <strong>Studies</strong> é escrito como tutoriais para que outros possam aprender a partir dos meus estudos. Alguns tópicos incluem:
                            <ul>
                                <li>Linguagens de Programação.</li>
                                <li>Banco de Dados.</li>
                                <li>Matemática</li>
                                <li>Inteligência Artificial.</li>
                                <li>Algoritmos e Estruturas de Dados.</li>
                            </ul>
                            <a href="https://github.com/rodrigols89/studies" target="_blank" rel="noopener noreferrer"><span className="section-title"> → [Project on GitHub]</span></a>
                            <br />
                            <br />
                        </div>
                        <ul className="list-inline item-details">
                            <li>
                                Client: <strong>Myself</strong>
                            </li>
                            <li>
                                Date: <strong>September 2021 to the present day</strong>
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

export default Studies;
