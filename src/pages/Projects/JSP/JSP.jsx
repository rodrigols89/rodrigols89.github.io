import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import jspImg from './images/jsp-logo-800x400.png';

import './JSP.scss';

const JSP = () => {
    return (
        <div>
            <SecondNavbar />

            <div className="container-fluid project">
                <div className="row modal-body">

                    <div className="col-sm-6">
                        <h2 className="text-center">Job Salary Prediction</h2>
                        <hr className="star-primary" />
                        <img src={jspImg} className="img-fluid img-thumbnail center" alt="img" />
                    </div>

                    <div className="col-sm-6 text-project">
                        <div>
                            O projeto <strong>Job Salary Prediction</strong> tem como objetivo desenvolver uma solução para prever salários em anúncios de emprego.
                            <ul>
                                <li>Desenvolvi este projeto utilizando a metodologia <strong>CRISP-DM</strong>.</li>
                                <li>Antes de treinar o modelo, foi realizada uma <a href="https://github.com/rodrigols89/jsp/blob/main/jsp/notebooks/eda.ipynb" target="_blank" rel="noopener noreferrer">Análise Exploratória de Dados (EDA)</a> para identificar dados ausentes e obter insights.</li>
                                <li>O modelo para esse projeto foi <a href="https://github.com/rodrigols89/jsp/blob/main/jsp/notebooks/training-v1.ipynb" target="_blank" rel="noopener noreferrer">Treinado e Validado</a> utilizando a biblioteca <strong>CatBoost</strong>.</li>
                                <li>A linguagem de programação <strong>Python</strong> foi utilizada para a codificação.</li>
                                <li>Uma <a href="https://rodrigols89.streamlit.app/" target="_blank" rel="noopener noreferrer">Aplicação Web</a> com Streamlit foi desenvolvida para que as pessoas possam prever salários.</li>
                                <li>O projeto possui uma <strong>CLI</strong> para realizar operações básicas de <strong>ETL</strong> usando a biblioteca <i>Typer</i>.</li>
                                <li>A ferramenta <strong>Docker</strong> foi utilizada para armazenar e servir dados para a aplicação.</li>
                            </ul>
                            <a href="https://github.com/rodrigols89/jsp" target="_blank" rel="noopener noreferrer"><span className="section-title"> → [Project on GitHub]</span></a>
                            <br />
                            <br />
                        </div>
                        <ul className="list-inline item-details">
                            <li>
                                Client: <strong><a href="https://www.gria.io/" target="_blank" rel="noopener noreferrer">GRIA</a></strong>
                            </li>
                            <li>
                                Date: <strong>February 2024</strong>
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
