import React from 'react';

import '../styles/Section.css';

const Section = props => {
  const { header, aussieImage, image } = props;

  return (
    <section
      className="Section"
      style={{ backgroundImage: `url(${image})` }}
    >

      {/*You can also conditionally render by just including the condition inline,
     would we rather do this to avoid having to call a function?*/}
      {header && <h1 className="Section-Title">{header}</h1>}
      {aussieImage && aussieImage()}
    </section>
  );
};

export default Section;
