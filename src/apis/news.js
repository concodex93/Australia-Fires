import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default axios.create({
  baseURL:
    `https://newsapi.org/v2/everything?q=australiabushfires&apiKey=${API_KEY}`
});
