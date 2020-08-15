import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row"> 

          <div class="footer-col col-md-4">
            <h3>Location</h3>
            <hr class="style-four"/>            
            <address>
              <strong>Rodrigo Leite - Software Engineer</strong><br/>
              Campina Grande - PB, CEP: 58401-040<br/>
              Dagoberto Damião, Nº 60, Palmeira<br/>
              TIM - (83) 998819364, (83) 996500112<br/>
              <strong>E-mail: </strong><a href="mailto:#">drigols.creative@gmail.com</a>
            </address>
          </div>

          <div class="footer-col col-md-8">
            <h3 class="text-center">Around the Web</h3>
            <hr class="style-four"/>
            <ul class="list-inline">
              <li class="list-inline-item">
                  <a href="https://github.com/drigols" class="btn-social btn-outline" target="_blank" title="GitHub"><span class="sr-only">GitHub</span><i class="fa fa-fw fa-github"></i></a>
              </li>
              <li class="list-inline-item">
                      <a href="https://stackoverflow.com/users/8047904/drigols" class="btn-social btn-outline" target="_blank" title="StackOverflow"><span class="sr-only">StackOverflow</span><i class="fa fa-fw fa-stack-overflow"></i></a>
              </li>
              <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/drigols" class="btn-social btn-outline" target="_blank" title="Linkedin"><span class="sr-only">Linkedin</span><i class="fa fa-fw fa-linkedin"></i></a>
              </li>
              <li class="list-inline-item">
                  <a href="https://twitter.com/drigols" class="btn-social btn-outline" target="_blank" title="Twitter"><span class="sr-only">Twitter</span><i class="fa fa-fw fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                      <a href="https://www.instagram.com/drigols" class="btn-social btn-outline" target="_blank" title="Instagram"><span class="sr-only">Instagram</span><i class="fa fa-fw fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                  <a href="https://www.facebook.com/drigols" class="btn-social btn-outline" target="_blank" title="Facebook"><span class="sr-only">Facebook</span><i class="fa fa-fw fa-facebook"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
