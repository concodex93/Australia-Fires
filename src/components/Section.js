import React from 'react';

import './Section.css';

const Section = props => {

  /* const sectionStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  } */

  return (
    /* <section style={sectionStyle}>*/
    <section className="Section" style={{ backgroundImage: `url(${props.image})` }}>
      <h1>{props.header}</h1>
    </section>
  );
};

export default Section;

