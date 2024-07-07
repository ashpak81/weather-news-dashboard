
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: 'd82e1294315045a6a2f90b7fd76d97bc',
          },
        });
        setHeadlines(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading headlines: {error.message}</p>;

  return (
    <div>
      <h1>Top News Headlines</h1>
      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHeadlines;
