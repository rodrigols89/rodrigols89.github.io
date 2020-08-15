import React from 'react';

import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">About</h2>
            <hr/>
          </div>
        </div>

				<div class="row">
					<div class="text-cover">
						<h1 class="name">Ro<span class="drigols">drigo</span>  <span class="drigols">L</span>eite  da  <span class="drigols">S</span>ilva - <span class="drigols">drigols</span></h1>
					</div>	
					<div class="col-lg-12">
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
