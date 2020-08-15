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
							Hello guys !
						</p>
						<p>
							My name is <strong>Rodrigo Leite da Silva</strong>. I'm 31 years old and I graduated in <u>Analysis and Systems Development</u>. <br/>
							My main interests in technology are with algorithms and Artificial Intelligence to make the world a better place.
						</p>
					</div>
				</div>

      </div>
    </section>
  )
}

export default About;
