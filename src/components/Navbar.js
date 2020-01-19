import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar"
        style={{
          position: 'fixed',
          top: '0',
          display: 'flex',
          width: '100%',
          height: ' 60px',
          background: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ color: 'white', margin: '0 5rem', padding: '1.5rem', fontSize: '28px', width:'50%' }}>
          Aussie Aid
        </div>
        <ul
          style={{
            display: 'flex',
            width: '100%',
            listStyleType: 'none',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <li style={{ margin: '0 5rem', padding: '.5rem' }}>
            <a style={{ color: 'white' }} href="#updates">
              Live Updates
            </a>
          </li>
          <li style={{ margin: '0 5rem', padding: '.5rem' }}>
            <a style={{ color: 'white' }} href="#info">
              Info
            </a>
          </li>
          <li style={{ margin: '0 5rem', padding: '.5rem' }}>
            <a style={{ color: 'white' }} href="#donate">
              Donate
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
