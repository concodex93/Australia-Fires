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

  const News = () => {
    return <Section header={'Section 3'} />;
  };

  const Donate = () => {
    return <Section header={'Section 4'} />;
  };

  const NotFound = () => {
    return <Section header={'Not Found'} />;
  };

  //Pass each page component into this array
  //Ensure your landing page is first, and your default page not found, last.
  // const _pages = [<Landing />, <Info />, <Donate />, <NotFound />];

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
