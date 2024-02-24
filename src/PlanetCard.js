import React from 'react';
import './app.css'
const PlanetCard = ({ planet, residents }) => (
  <div className="planet-card">
    <h2>{planet.name}</h2>
    <p>Climate: {planet.climate}</p>
    <p>Population: {planet.population}</p>
    <p>Terrain: {planet.terrain}</p>

    <h3>Residents:</h3>
    <ul className="resident-list">
      {planet.residents.map((residentURL) => (
        <li key={residentURL}>
          {residents[residentURL] && (
            <>
              <p>Name: {residents[residentURL].name}</p>
              <p>Height: {residents[residentURL].height}</p>
              <p>Mass: {residents[residentURL].mass}</p>
              <p>Gender: {residents[residentURL].gender}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default PlanetCard;
