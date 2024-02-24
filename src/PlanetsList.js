import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';

const PlanetsList = ({ planets }) => {
  const [residents, setResidents] = useState({});

  useEffect(() => {
    const fetchResidents = async () => {
      const residentsData = {};
      await Promise.all(
        planets.map(async (planet) => {
          await Promise.all(
            planet.residents.map(async (residentURL) => {
              const response = await axios.get(residentURL);
              residentsData[residentURL] = response.data;
            })
          );
        })
      );
      setResidents(residentsData);
    };

    fetchResidents();
  }, [planets]);

  return (
    <div>
      {planets.map((planet) => (
        <PlanetCard key={planet.url} planet={planet} residents={residents} />
      ))}
    </div>
  );
};

export default PlanetsList;
