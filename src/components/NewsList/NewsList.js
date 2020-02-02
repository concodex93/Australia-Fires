import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';

import './NewsList.css';

const NewsList = props => {
  const { articles, next, prev, pagination, donors } = props;
  const list = articles ? articles : donors;

  if (!list)
    return <div>Ops, looks like there's no news? Try refreshing the page.</div>;
  if (list.length > 0) {
    return (
      <div className="News-Headline-Container">
        <ul className="News-Headline-List">
          {list.map((item, index) => {
            return (
              <li key={index} className="News-Headline-List-Items">
                <Card item={item} />
              </li>
            );
          })}
        </ul>
        <div className="Button-Page-List">
          {prev && (
            <Button text={'Previous'} onClick={() => pagination(prev.page)} />
          )}
          {next && (
            <Button text={'Next'} onClick={() => pagination(next.page)} />
          )}
        </div>
      </div>
    );
  }
};

export default NewsList;
