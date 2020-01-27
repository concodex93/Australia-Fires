import axios from 'axios';

export default axios.create({
  baseURL:
    'https://newsapi.org/v2/everything?q=australiabushfires&apiKey=b2716dccfcfb476b99a1284929c88219'
});
