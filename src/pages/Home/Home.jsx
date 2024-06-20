import React from 'react';

import MainNavbar from '../../components/Navigation/MainNavbar';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
/* import Medium from '../../components/Medium/Medium'; */
import Footer from '../../components/Footer/Footer';

import './Home.css'

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <About />
      <Portfolio />
    {/*
      <Medium />
    */}
      <Footer />
    </div>
  )
}

export default Home;
