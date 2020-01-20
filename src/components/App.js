import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Section from './Section';
import backgroundImage from '../images/background.jpg';

import './App.css';

// Main Landing Page

const App = () => {

  const Landing = () => {
    return <Section image={backgroundImage} />
  }

  const Info = () => {
    return <Section header={'Section 2'} />
  }

  const Donate = () => {
    return <Section header={'Section 3'} />
  }

  const NotFound = () => {
    return <Section header={'Not Found'} />
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/info" component={Info} />
          <Route path="/donate" component={Donate} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
