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

  const Info = () => {
    return <Section header={'Section 2'} />;
  };

  const Donate = () => {
    return <Section header={'Section 3'} />;
  };

  const NotFound = () => {
    return <Section header={'Not Found'} />;
  };

  //Pass each page component into this array
  //Ensure your landing page is first, and your default page not found, last.
  const pages = [
    <Landing />,
    <Info />,
    <Donate />,
    <NotFound />
  ];

  return (
    <div className="App">
      <Router>
        <Navbar pages={pages} />
        <Switch>

          {/* Route to the Landing page */}
          <Route key="Landing" exact path={`/`}>
            <div>
              {pages[0]}
            </div>
          </Route>

          {/* Dynamically render route link in the Navbar 
          excluding Landing and Not Found pages */}
          {pages.map((page) => {
            return <Route key={page.type.name} path={`/${page.type.name}`}>
              <div>
                {page}
              </div>
            </Route>
          })}

          {/* Route to the default page not found, page */}
          <Route path='*' exact={true}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
