import React from 'react';

import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title header-name">Sobre</h2>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="text-cover">
                        <h1 className="name"><span className="drigols">Rodrigo</span>  <span className="drigols">L</span>eite  da  <span className="drigols">S</span>ilva</h1>
                    </div>
                    <div className="col-lg-12">
                        <p>
                            Olá a todos!
                        </p>
                        <p>
                            <ul>
                                <li>Sou Desenvolvedor de Software com experiência em Projetos Pessoais e de Código Aberto envolvendo Python e Ciência de Dados.</li>
                                <li>Com formação em <strong>Análise e Desenvolvimento de Sistemas</strong>, atualmente estou me pós-graduando em <strong>Ciência de Dados</strong> com o objetivo de criar sistemas de Inteligência Artificial.</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
