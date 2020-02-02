import React from 'react';

import './Card.css';

const Card = props => {
  const { item } = props;

  return (
    <div className="ui card">
      <a href={item.url}>
        <img className="Article-Image" src={item.urlToImage} alt={item.title} />
      </a>
      <div className="content">
        <a className="header" href={item.url}>
          {item.title}
        </a>
      </div>
    </div>
  );
};

export default Card;
