import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidenav from './Layout/Sidenav';
import Main from './Layout/Main';

import './bootstrap.min.css';
import 'react-ytloader/dist/index.css';

const App = () => {
  
  return (
      <div className="App">
        <Router>
          <Sidenav></Sidenav>
          <Main></Main>
        </Router>
      </div>
  )
}

export default App