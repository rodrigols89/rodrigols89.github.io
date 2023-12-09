import React from 'react';

import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title header-name">About</h2>
            <hr/>
          </div>
        </div>

				<div className="row">
					<div className="text-cover">
						<h1 className="name">Ro<span className="drigols">drigo</span>  <span className="drigols">L</span>eite  da  <span className="drigols">S</span>ilva - <span className="drigols">drigols</span></h1>
					</div>	
					<div className="col-lg-12">
						<p>
                Hello everyone!
						</p>
						<p>
                My name is <strong>Rodrigo Leite da Silva</strong>. I am a software developer with a degree in <strong>Analysis and Systems Development</strong> from Mauricio of Nassau University (Brazil). I have experience in Personal Projects involving Python, Data Science, Machine Learning, and Open-Source.
                <br/>
                <br/>
                My main interests are working with Software Development using my Hard and Soft skills to add financial and productive value to my work environment.
						</p>
					</div>
				</div>

      </div>
    </section>
  )
}

export default About;
