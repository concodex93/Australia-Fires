import React from 'react';
import Section from '../Section/Section';
import backgroundImage from '../../images/background.jpg';
import australiaImage from '../../images/Australia.png';

import './LandingPage.css';

const Landing = () => {
  const aussieImage = () => {
    return (
      <div className="aussieImageWrapper">
        <img className="aussieImage" src={australiaImage} alt="austalia" />;
      </div>
    );
  };
  return <Section aussieImage={aussieImage} image={backgroundImage} />;
};

export default Landing;
