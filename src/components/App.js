import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './LandingPage';
import News from './News';
import Info from './Info';
import Donate from './Donate';
import NotFound from './NotFound';

import '../styles/App.css';

// Main Landing Page

const App = () => {

  //Ensure your landing page is first, and your default page not found, last.
  const data = {
    pages: [
      {
        componentName: <Landing />,
        toRender: false
      },
      {
        componentName: <Info />,
        toRender: true
      },
      {
        componentName: <News />,
        toRender: true
      },
      {
        componentName: <Donate />,
        toRender: true
      },
      {
        componentName: <NotFound />,
        toRender: false
      }
    ]
  };

  const { pages } = data;
  const firstPageName = pages[0].componentName.type.name;
  const firsPageComponentName = pages[0].componentName;

  return (
    <div className="App">
      <Router>
        <Navbar pages={pages} />
        <Switch>
          {/* Route to the Landing page */}
          <Route key={firstPageName} exact path={`/`}>
            <div>{firsPageComponentName}</div>
          </Route>

          {/* Dynamically render route link in the Navbar 
          excluding Landing and Not Found pages */}
          {pages.map(page => {
            let { name } = page.componentName.type;
            let { componentName } = page;
            return (
              <Route key={name} path={`/${name}`}>
                <div>{componentName}</div>
              </Route>
            );
          })}

          {/* Route to the default page not found, page */}
          <Route path="*" exact={true}>
            {pages[pages.length - 1].componentName}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
