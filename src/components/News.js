import React, { useState, useEffect } from 'react';
import news from '../apis/news';
import Section from './Section';

const News = () => {
  // State
  const [articles, setArticles] = useState({ articles: [] });

  // Could also think about a caching stategy? Where we cache the response?
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await news.get();
        if (response.status === 200) {
          setArticles(response.data.articles);
        } else {
          setArticles('Ops something went wrong');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Could maybe extract this into its own List/Card component?
  const newsList = () => {
    if (articles.length > 0) {
      return (
        <div className="News-Headline-Container">
          <ul className="News-Headline-List">
            {articles.map(article => {
              // publishedAt seems to be th only unquie id. Should be okay for now.
              return (
                <li key={article.publishedAt}>
                  <div className="ui card">
                    <a href={article.url}>
                      <img
                        className="Acticle-Image"
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
        </div>
      );
    }
  };

  return <Section newsList={newsList} />;
};

export default News;
