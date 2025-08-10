import type {WeatherCardProps} from '../../interfaces/weather.interface';
import LocationIcon from '../../assets/icons/location.svg';

import './card-climate.css';

export const CardClimate = ({ weather , city }:WeatherCardProps) => {
  const temperature = Math.round(weather.main.temp);
  return (
    <div className="card-climate-container">
      <article className="card-climate">

      <span className="card-climate-number">{temperature}°</span>
      <div className="card-climate-info">
        <span>Jueves,{weather.dt_txt}</span>
        <span className="card-climate-location"><img src={LocationIcon} alt="location icon" />{city?.name}</span>
      </div>
      </article>
    </div>
  );
};
