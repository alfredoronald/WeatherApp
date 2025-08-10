import SunIcon from '../../assets/icons/sun.svg';
import './card.css';

const Card = () => {
  return (
    <div className="card-container">
      <p className="card-time">Ahora</p>
      <img src={SunIcon} className="card-icon" alt="" />
      <p className="card-temp">25°</p>
    </div>
  );
};

export default Card;
