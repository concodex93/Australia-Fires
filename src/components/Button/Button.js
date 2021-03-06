import React from 'react';

import './Button.css';

const Button = props => {
  const { text, onClick } = props;

  return (
    <div className="Button-Container">
      <button className={`ui button`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
