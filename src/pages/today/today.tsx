import {useRef, useState} from 'react'
import Card from '../../components/card/card';

import './today.css'
const Today = ({id}:string) => {


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
    <div id={id} className="today-container">

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

export default Today