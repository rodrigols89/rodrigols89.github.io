import React from 'react';

import Routes from './routes';

import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/freelancer/freelancer.min.css';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </div>
  );
}

export default App;
