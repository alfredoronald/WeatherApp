import {useState,useEffect} from 'react';
import InitialPage from './pages/init/init';
import Weather from './components/weather/weather';
import './App.css';

function App() {
  const [showWeather, setShowWeather] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWeather(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return ( 
    <>
    {showWeather ? <Weather /> : <InitialPage />}
    </>
  )
}

export default App;
