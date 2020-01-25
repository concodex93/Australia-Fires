import React from 'react';

import '../styles/Section.css';

const Section = props => {

  // Conditionally render aussieImage for LandingPage component
  const renderAussieImage = () => {
    if (props.aussieImage) {
      return props.aussieImage();
    }
  };

  return (
    <section
      className="Section"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {/*<h1>{props.header}</h1>*/}
      {renderAussieImage()}
    </section>
  );
};

export default Section;
