import React, { useState, useEffect, useCallback } from 'react';
import news from '../apis/news';
import Section from './Section';
import NewsList from './NewsList';

import '../styles/News.css';

const News = () => {
  // State
  const [articles, setArticles] = useState({ articles: [] });
  const [loaded, setLoaded] = useState(false);
  const [pagedResults, setPagedResults] = useState({});

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

  const paginateArticles = useCallback(
    // Can configure the number of results per page
    (page = 1, limit = 10) => {
      if (articles.length > 0) {
        // Create object to store page info
        const results = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        results.results = articles.slice(startIndex, endIndex);
        if (startIndex > 0) {
          results.prev = { page: page - 1, limit: limit };
        }
        if (endIndex < articles.length) {
          results.next = { page: page + 1, limit: limit };
        }
        setPagedResults(results);
      }
    },
    [articles]
  );

  useEffect(() => {
    paginateArticles();
  }, [paginateArticles]);

  const newsList = () => {
    const { results, next, prev } = pagedResults;
    return (
      <NewsList
        articles={results}
        next={next}
        prev={prev}
        pagination={paginateArticles}
      />
    );
  };

  return (
    <>
      {loaded ? (
        <Section newsList={newsList} />
      ) : (
        <div className="Loading">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
