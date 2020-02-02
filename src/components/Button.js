import React from 'react';

import '../styles/Button.css';

const Button = props => {
  const { text, onClick } = props;

  return (
    <div className="Button-Container">
      <button className={`ui button`} data-action={text} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
