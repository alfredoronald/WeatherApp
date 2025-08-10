import { useEffect, useState } from 'react';

import type { ForecastData } from '../../interfaces/weather.interface';
import Modal from '../modal/modal';
import { getWeather } from '../../services/weather';
import { CardClimate } from '../card-climate/card-climate';

import './weather.css';

const Weather = () => {
  const [climate, setClimate] = useState<ForecastData | null>(null);
  useEffect(() => {
    const fetchClimate = async () => {
      const data = await getWeather();
      if (data) {
        setClimate(data);
      }
    };
    fetchClimate();
  }, []);
  console.log(getWeather());
  return (
    <div className="weather-container">
      <div className="weather-content">
        {climate && climate.list && climate.city ? (
          <CardClimate weather={climate.list[0]} city={climate.city} />
        ) : (
          <p>Cargando clima...</p>
        )}

        <Modal />
      </div>
    </div>
  );
};

export default Weather;
