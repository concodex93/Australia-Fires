import React from 'react';

import '../styles/Button.css';

const Button = props => {
  const { title, next, prev, pagination } = props;

  const getPage = () => {
    console.log('clicked');
    if (title === 'Next') {
      pagination(next.page);
    } else if (title === 'Previous') {
      pagination(prev.page);
    }
  };

  return (
    <div className="Button-Container">
      <button className={`ui button`} onClick={getPage}>
        {title}
      </button>
    </div>
  );
};

export default Button;
