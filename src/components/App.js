import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Section from './Section';
import Landing from './LandingPage';

import '../styles/App.css';

// Main Landing Page

const App = () => {
  // We could move these functional components to seperare files once
  // we have start working on them

  // const Landing = () => {
  //   return <Section image={backgroundImage} />;
  // };

  const Info = () => {
    return <Section header={'Section 2'} />;
  };

  const Donate = () => {
    return <Section header={'Section 3'} />;
  };

  const NotFound = () => {
    return <Section header={'Not Found'} />;
  };

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
