import IntroImage from '../../assets/backgrounds/intro.svg';
import './init.css';

const InitialPage = () => {
  return (
    <div className="container-intro">
      <h1>Weather App</h1>
      <img src={IntroImage} alt="Imagen de Inicio" 
      fetchPriority="high"/>
    </div>
  );
};

export default InitialPage;
