import {useRef, useState} from 'react'
import Card from '../../components/card/card';

import './today.css'
const Today = ({ weather}:WeatherCardProps) => {


  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.body.style.cursor = 'default';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.body.style.cursor = 'default';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div  className="today-container">
        <div
        className="card-list"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
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
        <span>max: {Math.round(weather.main.temp_max || "30")}°</span>
        <span>min: {Math.round(weather.main.temp_min)}°</span>
      </div>
      <div className="weather-details">
        <span>Presion: {Math.round(weather.main.pressure)}</span>
        <span>Humedad: {Math.round(weather.main.humidity)}</span>
      </div>

    </div>
  )
}

export default Today