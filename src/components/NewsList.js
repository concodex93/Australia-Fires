import React from 'react';
import Button from './Button';

import '../styles/NewsList.css';

const NewsList = props => {
  const { articles, next, prev, pagination } = props;
  if (!articles) return <div>:)</div>;
  if (articles.length > 0) {
    return (
      <div className="News-Headline-Container">
        <ul className="News-Headline-List">
          {articles.map((article, index) => {
            return (
              <li key={index} className="News-Headline-List-Items">
                <div className="ui card">
                  <a href={article.url}>
                    <img
                      className="Article-Image"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  </a>
                  <div className="content">
                    <a className="header" href={article.url}>
                      {article.title}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="Button-Page-List">
          {prev && (
            <Button title={'Previous'} prev={prev} pagination={pagination} />
          )}
          {next && (
            <Button title={'Next'} next={next} pagination={pagination} />
          )}
        </div>
      </div>
    );
  }
};

export default NewsList;
