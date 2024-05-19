// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  const response = axios.get('/search', {
    params: {
      query: topic,
      page: 1,
      hitsPerPage: 5
    }
  });
  console.log(topic);
  return response.data.hits;
};