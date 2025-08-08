import {useState,useEffect} from 'react';
import InitialPage from './components/init/init';
import Weather from './components/weather/weather';
import './App.css';

function App() {
  const [showWeather, setShowWeather] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWeather(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return ( 
    <>
    {showWeather ? <Weather /> : <InitialPage />}
    </>
  )
}

export default App;
