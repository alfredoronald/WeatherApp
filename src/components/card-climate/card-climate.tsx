import React from 'react';
import {CardClimateProps} from '../../interfaces/weather.interface';
import './card-climate.css';

export const CardClimate = ({ weather , city }:CardClimateProps) => {
  return (
    <div className="card-climate-container">
      <article className="card-climate">

      <span className="card-climate-number">{weather.main.temp}°</span>
      <div className="card-climate-info">
        <span>Jueves,{weather.dt_txt}</span>
        <span className="card-climate-location"><img src="/src/assets/icons/location.svg" alt="location icon" />{city.name}</span>
      </div>
      </article>
    </div>
  );
};
