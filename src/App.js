import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetsList from './PlanetsList';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/?format=json');
        setPlanets(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const loadMorePlanets = async () => {
    try {
      const response = await axios.get(nextPage);
      setPlanets([...planets, ...response.data.results]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error('Error fetching more planets:', error);
    }
  };

  return (
    <div className="container text-center">
      <h1>Planets Directory</h1>
      <PlanetsList planets={planets} />
      {nextPage && (
        <div className="pagination">
          <button onClick={loadMorePlanets}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default App;
