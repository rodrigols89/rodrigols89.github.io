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
                        <hr className="star-primary" />
                        <img src={musicalNotesImg} className="img-fluid img-thumbnail center" alt="img" />
                    </div>

                    <div className="col-sm-6 text-project">
                        <div>
                            O projeto <strong>Musical Notes</strong> fornece uma <i>Interface de Linha de Comando (CLI)</i> para auxiliar profissionais e estudantes de música a acessarem facilmente informações sobre escalas, acordes e campos harmônicos.
                            <ul>
                                <li>A linguagem de programação <strong>Python</strong> foi utilizada para a codificação.</li>
                                <li>As bibliotecas <strong>Typer</strong> e <strong>Rich</strong> foram usadas para criar a <i>Interface de Linha de Comando (CLI)</i>.</li>
                                <li>Testes unitários para a aplicação foram criados usando <strong>Pytest</strong> e <strong>Codecov</strong>, <a href="https://app.codecov.io/gh/rodrigols89/musical-notes" target="_blank" rel="noopener noreferrer">cobrindo 100% dos testes</a>.</li>
                                <li>O <strong>GitHub Actions</strong> foi usado para <i>Integração Contínua (CI)</i>.</li>
                                <li>Para a documentação <a href="https://musical-notes.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">(Musical Notes - Docs)</a>, foram utilizados <strong>MKDocs</strong> e <strong>ReadTheDocs</strong>.</li>
                                <li>A biblioteca também está disponível no PyPI: <a href="https://pypi.org/project/musical-notes/" target="_blank" rel="noopener noreferrer">musical-notes</a>.</li>
                            </ul>
                            <a href="https://github.com/rodrigols89/musical-notes" target="_blank" rel="noopener noreferrer"><span className="section-title"> → [Project in GitHub]</span></a>
                            <br />
                            <br />
                            <br />
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
