import React, { useState, useEffect } from 'react';

const APIFetcher = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.items || []); // Assurez-vous que data est un tableau
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((project) => (
            <li key={project.id}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default APIFetcher;
