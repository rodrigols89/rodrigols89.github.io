import React from 'react';

import Navbar from './components/Navigation/Navbar';

import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/freelancer/freelancer.min.css';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </div>
  );
}

export default App;
