import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo.png';
import './Navbar.css';

const Navbar = props => {
  const { pages } = props;

  return (
    <nav className="Navbar">
      {/* Wrap link around logo to return you to the landing page */}
      <Link to="/" className="Navbar-Logo-Link">
        <img src={logo} alt="Logo" />
        <span className="Navbar-Logo">Auzzie Aid</span>
      </Link>

      <ul className="Navbar-Menu">
        {/* Dynamically render links based on the pages array */}
        {pages.map(page => {
          if (page.toRender) {
            let { name } = page.componentName.type;
            return (
              <li
                key={name}
                className="Navbar-Menu-ListItem"
                onClick={() => {
                  console.log(`You Clicked ${name}`);
                }}
              >
                <Link to={`/${name}`} className="Navbar-Menu-ListItem-Link">
                  {name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
