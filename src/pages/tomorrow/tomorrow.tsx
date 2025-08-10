import React from 'react'
import Card from '../../components/card/card';

const Tomorrow = () => {
  return (
    <div  className="today-container">
        <div
        className="card-list"
       
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="weather-details">
        <span>max: 26°</span>
        <span>min: 19°</span>
      </div>
      <div className="weather-details">
        <span>Viento: 16km-h</span>
        <span>Humedad: 66%</span>
      </div>

    </div>
  )
}

export default Tomorrow