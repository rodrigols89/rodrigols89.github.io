import React from 'react';

import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">About</h2>
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
                My name is <strong>Rodrigo Leite da Silva</strong>, and I am a software developer with a degree in <strong>Analysis and Systems Development</strong> from Faculdade Maurício de Nassau - Campina Grande/Brazil.
              <br/>
              <br/>
                My main interests are Artificial Intelligence projects involving Machine Learning techniques such as data visualization, preprocessing, cross-validation, linear regression, and data analysis.
						</p>
					</div>
				</div>

      </div>
    </section>
  )
}

export default About;
