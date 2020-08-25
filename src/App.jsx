import React from 'react';

import Home from './pages/Home/Home';

import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/freelancer/freelancer.min.css';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Home />
      </React.Fragment>
    </div>
  );
}

export default App;
