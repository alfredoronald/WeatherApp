import React from 'react';
import './card-climate.css';

export const CardClimate = () => {
  return (
    <div className="card-climate-container">
      <article className="card-climate">

      <span className="card-climate-number">25°</span>
      <div className="card-climate-info">
        <span>Jueves, 26 de octubre</span>
        <span>Ensenada B.C</span>
      </div>
      </article>
    </div>
  );
};
