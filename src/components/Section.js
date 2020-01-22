import React from 'react';

import '../styles/Section.css';

const Section = props => {
  // Can we remove this comment?
  /* const sectionStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  } */

  // Conditionally render aussieImage for LandingPage component
  const renderAussieImage = () => {
    if (props.aussieImage) {
      return props.aussieImage();
    }
  };

  return (
    /* <section style={sectionStyle}>*/
    <section
      className="Section"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1>{props.header}</h1>
      {renderAussieImage()}
    </section>
  );
};

export default Section;
