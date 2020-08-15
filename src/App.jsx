import React from 'react';

import Navbar from './components/Navigation/Navbar';
import About from './components/About/About';

import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/freelancer/freelancer.min.css';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <About />
      </React.Fragment>
    </div>
  );
}

export default App;
