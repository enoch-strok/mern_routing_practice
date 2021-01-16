import './App.css';
import React from 'react';
import {Router, Link} from '@reach/router';

import WelcomePage from './components/WelcomePage.jsx';
import InputPage from './components/InputPage.jsx';
import WordPageParameters from './components/WordPageParameters.jsx';


function App() {
  return (
    <div className="App">
      <h1>This is App.js</h1>
      <Router>
          <WelcomePage path="/welcome" />
          <InputPage path="/:id" />
          <WordPageParameters path="/:id/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
