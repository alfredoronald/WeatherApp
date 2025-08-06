

import './init.css';

const InitialPage = () => {
  function handleClick() {
    window.location.href = '/weather';
  }
  

  return (
    <div id="loading-screen" className="container-intro">
      <h1>Weather App</h1>
      <img
        src="/src/assets/backgrounds/intro.svg"
        alt="Imagen de Inicio"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default InitialPage;
