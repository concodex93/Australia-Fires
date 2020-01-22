import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/Logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div className="Navbar-Logo-Image">
          <img src={logo} alt="Logo" />;
        </div>
        <div className="Navbar-Logo">Auzzie Aid</div>
        <ul className="Navbar-Menu">
          <li className="Navbar-Menu-ListItem">
            <Link to="/" className="Navbar-Menu-ListItem-Link">
              Live Updates
            </Link>
          </li>
          <li className="Navbar-Menu-ListItem">
            <Link to="/info" className="Navbar-Menu-ListItem-Link">
              Info
            </Link>
          </li>
          <li className="Navbar-Menu-ListItem">
            <Link to="/donate" className="Navbar-Menu-ListItem-Link">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
