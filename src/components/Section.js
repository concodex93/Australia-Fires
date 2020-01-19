import React from 'react';

const Section = props => {
  return (
    <section
      id={props.anchorId}
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
      }}
    >
      <h1>{props.header}</h1>
    </section>
  );
};

export default Section;
