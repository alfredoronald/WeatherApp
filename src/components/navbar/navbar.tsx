import {useState, useEffect} from 'react'
import Today from '../../pages/today/today';
import Week from '../../pages/week/week';
import NextWeek from '../../pages/nextWeek/nextWeek';
import {getWeather} from '../../services/weather';
import type {WeatherCardProps} from '../../interfaces/weather.interface';

import './navbar.css';
const Navbar = () => {
  const [weather, setWeather] = useState<WeatherCardProps[]>([]);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(()=> {
    const fetchWeather = async () => {
      const data = await getWeather();
      if (data) {
        setWeather(data);
      }
    };
    fetchWeather();
  },[]);
  const renderContent = () => {
    switch (activeLink) {
      case "home":
        return <div>
          {weather && weather.list && weather.city ? (
          <Today weather={weather.list[0]}/>):(<p>Cargando clima...</p>)}
        </div>
      case "tomorrow":
        return <div>
          {weather && weather.list && weather.city ? (
          <Today weather={weather.list[1]}/>):(<p>Cargando clima...</p>)}
        </div>;
      case "week":
        return <Week />;
      case "nextWeek":
        return <NextWeek/>;
      default:
        return null;
    }
  };
  return (
    <div className="navbar-container">
        <nav className="modal-nav">
        <ul className="nav-list">
          <a onClick={()=>setActiveLink("home")} className="nav-links" >Hoy</a>
          <a onClick={()=>setActiveLink("tomorrow")} className="nav-links" >Mañana</a>
          <a onClick={()=>setActiveLink("week")} className="nav-links" >Semana</a>
          <a onClick={()=>setActiveLink("nextWeek")} className="nav-links" >Siguiente Semana</a>
        </ul>
      </nav>
      <div className="tab-content">{renderContent()}</div>

    </div>
  )
}

export default Navbar