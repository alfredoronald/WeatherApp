import InitialPage from './components/init/init';
import Weather from './components/weather/weather';
import './App.css';

function App() {
  if (window.location.pathname === '/weather') {
    return <Weather />;
  }
  return <InitialPage />;
  {
    /*<InitialPage /> <Weather />*/
  }
}

export default App;
