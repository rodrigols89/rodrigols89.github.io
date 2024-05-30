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
                            The project <strong>Job Salary Prediction</strong> aims to develop a solution for predicting salaries in job advertisements.
                            <ul>
                                <li>Developed this project using the <strong>CRISP-DM</strong> methodology.</li>
                                <li>I utilized the <strong>Python</strong> programming language.</li>
                                <li>I developed a <a href="https://rodrigols89.streamlit.app/" target="_blank" rel="noopener noreferrer">Web Interface</a> with <strong>Streamlit</strong> for people to predict salaries.</li>
                                <li>Also implemented a <strong>Data Lake Architecture</strong> to ingest (landing), process (processing), and provide (curated) data during the project development.</li>
                                <li>I conducted <a href="https://github.com/rodrigols89/jsp#eda" target="_blank" rel="noopener noreferrer">Exploratory Data Analysis (EDA)</a> to identify missing data, patterns, and gain insights.</li>
                                <li>I <a href="https://github.com/rodrigols89/jsp#training-evaluation" target="_blank" rel="noopener noreferrer">Trained and Validated</a> <strong>Machine Learning</strong> models to predict salaries in job advertisements using the <strong>CatBoost</strong> library.</li>
                                <li>I created a <strong>CLI</strong> that will be used to perform basic <strong>ETL (Extract, Transform, Load)</strong> operations using the Typer library.</li>
                                <li>I used <strong>Docker</strong> to store and serve data to the application.</li>
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
