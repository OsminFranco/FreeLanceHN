import React from 'react';
import {Route , Switch, BrowserRouter as Router}   from 'react-router-dom';


import logo from './logo.svg';
import './App.css';


import Home from './components/Content/Home'
import SingIn  from './components/Content/Sing in'
import Votes from './components/Content/Votes';

function App() { //componente funcional
  return (
    <Router>
      <switch>
      <Route path="/" component={Home} exact />
      <Route path="/votes" component={Votes} exact />
      <Route path="/signin" component={SingIn} exact />
      </switch>
    </Router>
  );
}

export default App;
