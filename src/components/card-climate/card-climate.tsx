import type { WeatherCardProps } from '../../interfaces/weather.interface';
import LocationIcon from '../../assets/icons/location.svg';
import {formatDateTime} from '../../utils/calendar';

import './card-climate.css';

export const CardClimate = ({ weather, city }: WeatherCardProps) => {
  const temperature = Math.round(weather.main.temp);
  const date = formatDateTime(weather.dt);

  return (
    <div className="card-climate-container">
      <article className="card-climate">
        <span className="card-climate-number">{temperature}°</span>
        <div className="card-climate-info">
          <span>{date.fechaTexto}</span>
          <span className="card-climate-location">
            <img src={LocationIcon} alt="location icon" />
            {city?.name}
          </span>
        </div>
      </article>
    </div>
  );
};
