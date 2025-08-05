import Modal from '../modal/modal';
import { CardClimate } from '../card-climate/card-climate';

import './weather.css';

const Weather = () => {
  return (
    <div id="mint-content" className="weather-container">
      <div className="weather-content">
        <CardClimate />
        <Modal />
      </div>
    </div>
  );
};

export default Weather;
