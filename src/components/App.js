import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import backgroundImage from '../images/background.jpg';

// Main Landing Page

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Poppins,sans-serif'
      }}
    >
      <Navbar />
      <Section
        anchorId={'updates'}
        image={backgroundImage}
      />
      <Section anchorId={'info'} header={'Section 2'} />
      <Section anchorId={'donate'} header={'Section 3'} />
    </div>
  );
};

export default App;
