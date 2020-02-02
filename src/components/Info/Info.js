import React from 'react';
import Section from '../Section/Section';
import Emoji from '../Emoji/Emoji';

import './Info.css';

const Info = props => {
  //return <Section header={'Section 2'} />;

  return (
    <div className="Information-Container">
      <div className="Information">
        <h2>Number of active fires right now!</h2>
        <div className="Information-ActiveFires">
          <span className="Information-ActiveFires-Number">137</span>
          <span className="Information-ActiveFires-Icon">
            <Emoji symbol="🔥" label="fire" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
