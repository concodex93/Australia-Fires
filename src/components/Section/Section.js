import React from 'react';

import './Section.css';

const Section = props => {
  const { header, aussieImage, image, newsList, getDonorList } = props;

  return (
    <section
      className="Section"
      style={{
        backgroundImage: `url(${image})`,
        marginTop: image ? '100px' : ''
      }}
    >
      {/*You can also conditionally render by just including the condition inline,
     would we rather do this to avoid having to call a function?*/}
      {header && <h1 className="Section-Title">{header}</h1>}
      {aussieImage && aussieImage()}
      {newsList && newsList()}
      {getDonorList && getDonorList()}
    </section>
  );
};

export default Section;
