import React, { useState, useEffect } from 'react';
import news from '../apis/news';
import Section from './Section';
import NewsList from './NewsList';

import '../styles/News.css';

const News = () => {
  // State
  const [articles, setArticles] = useState({ articles: [] });
  const [loaded, setLoaded] = useState(false)

  // Could also think about a caching stategy? Where we cache the response?
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await news.get();
        if (response.status === 200) {
          setArticles(response.data.articles);
          setLoaded(true);
        } else {
          setArticles('Ops something went wrong');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const newsList = () => {
    console.log(articles);
    return <NewsList articles={articles} />;
  }


  return (
    <>
      {loaded ? <Section newsList={newsList} /> : <div className="Loading">Loading...</div>}
    </>
  );
};

export default News;
