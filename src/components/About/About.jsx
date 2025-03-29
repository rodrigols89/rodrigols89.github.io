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
                    <div className="col-lg-12">
                        <p>
                            Olá a todos!
                        </p>
                        <p>
                            <ul>
                                <li style={{ marginBottom: "10px" }}>Me chamo <strong>Rodrigo Leite da Silva</strong>, sou desenvolvedor de software e graduado em <strong>Análise e Desenvolvimento de Sistemas</strong>, com experiência em projetos pessoais e open-source, especialmente com <i>Python</i>.</li>
                                <li>Atualmente, estou cursando <strong>Matemática</strong>, pois acredito que a integração entre os fundamentos computacionais e uma visão analítica aprofundada da matemática é essencial para resolver problemas atuais, principalmente no âmbito da <i>Inteligência Artificial</i>. Assim, busco unir rigor teórico e criatividade prática para desenvolver soluções inteligentes e eficientes.</li>
                            </ul>
                        </p>
                        <p>
                            <strong>Tecnologias:</strong>
                            <ul>
                                <li><strong>Linguagens de Programação:</strong> Python, JavaScript, Java.</li>
                                <li><strong>Banco de Dados:</strong> SQL, MySQL, PostgreSQL.</li>
                                <li><strong>Desenvolvimento Web:</strong> HTML, CSS, Django, React.</li>
                                <li><strong>Ferramentas:</strong> Git, GitHub (Actions), Docker.</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
