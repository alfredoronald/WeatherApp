interface WeatherData {
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

export interface WeatherCardProps {
  weather?: WeatherData;
  city?: {
    id: number;
    name: string;
    country: string;
    pupulation: number;
  }
}