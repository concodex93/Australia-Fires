import React from 'react';
import Section from './Section';
import backgroundImage from '../images/background.jpg';
import australiaImage from '../images/Australia.png';

import '../styles/LandingPage.css';

const Landing = () => {
  const renderImage = () => {
    return (
      <div className="aussieImageWrapper">
        <img className="aussieImage" src={australiaImage} alt="austalia" />;
      </div>
    );
  };
  return <Section aussieImage={renderImage} image={backgroundImage} />;
};

export default Landing;
