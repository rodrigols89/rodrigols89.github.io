import React from 'react';

import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title header-name">About</h2>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="text-cover">
                        <h1 className="name"><span className="drigols">Rodrigo</span>  <span className="drigols">L</span>eite  da  <span className="drigols">S</span>ilva</h1>
                    </div>
                    <div className="col-lg-12">
                        <p>
                            Hello everyone!
                        </p>
                        <p>
                            <ul>
                                <li>I am a Software Developer with a degree in <strong>Analysis and Systems Development</strong> from <a href="https://www.uninassau.edu.br/" target="_blank" rel="noopener noreferrer">Mauricio of Nassau</a> College</li>
                                <li>Currently I am Graduating (Specialization) in <strong>Applied Statistics</strong> at <a href="https://faculdadefocus.com.br/" target="_blank" rel="noopener noreferrer">Focus</a> College.</li>
                                <li>I have experience in Personal Projects involving Python, Data Science, and Open-Source.</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
