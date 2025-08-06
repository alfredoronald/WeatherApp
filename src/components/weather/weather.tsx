

import Modal from '../modal/modal';
import {getClimate} from '../../services/climate';
import { CardClimate } from '../card-climate/card-climate';


import './weather.css';

const Weather = () => {


  console.log('Fetching climate data...', getClimate());
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
