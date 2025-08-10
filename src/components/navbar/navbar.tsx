import { useState, useEffect } from 'react';
import Today from '../../pages/today/today';
import Week from '../../pages/week/week';
import NextWeek from '../../pages/nextWeek/nextWeek';
import { getWeather } from '../../services/weather';
import type { ForecastData } from '../../interfaces/weather.interface';

import './navbar.css';
const Navbar = () => {
  const [weather, setWeather] = useState<ForecastData | null>(null);
  const [activeLink, setActiveLink] = useState<'home'|'tomorrow'|'week'|'nextWeek'>('home');

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather();
      if (data) {
        setWeather(data);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="navbar-container">
      <nav className="modal-nav">
        <ul className="nav-list">
          <li>
            <a
              href="home"
              className={`nav-links ${activeLink === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('home');
              }}
            >
              Hoy
            </a>
          </li>
          <li>
            <a
              href="tomorrow"
              className={`nav-links ${activeLink === 'tomorrow' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('tomorrow');
              }}
            >
              Mañana
            </a>
          </li>
          <li>
            <a
              href="week"
              className={`nav-links ${activeLink === 'week' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('week');
              }}
            >
              Semana
            </a>
          </li>
          <li>
            <a
              href="nextWeek"
              className={`nav-links ${activeLink === 'nextWeek' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('nextWeek');
              }}
            >
              Siguiente Semana
            </a>
          </li>
        </ul>
      </nav>
      <div className="tab-content"> {activeLink === 'home' && (
          weather?.list ? <Today weather={weather.list[0]} /> : <p>Cargando clima...</p>
        )}
        {activeLink === 'tomorrow' && (
          weather?.list && weather.city ? <Today weather={weather.list[1]} /> : <p>Cargando clima...</p>
        )}
        {activeLink === 'week' && <Week />}
        {activeLink === 'nextWeek' && <NextWeek />}</div>
    </div>
  );
};

export default Navbar;
