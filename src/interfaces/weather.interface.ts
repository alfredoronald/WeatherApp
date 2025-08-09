interface WeatherData {
  main: {
    temp: number;
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