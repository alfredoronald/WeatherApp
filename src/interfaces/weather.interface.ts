export interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  weather: {  
    description: string;
    icon: string;
  }[];
  dt_txt: string;
}

export interface CityData {
  id: number;
  name: string;
  country: string;
  population: number; 
}


export interface WeatherCardProps {
  weather: WeatherData;
  city?: CityData;
}


export interface ForecastData {
  list: WeatherData[];
  city: CityData;
}