import SunIcon from '../../assets/icons/sun.svg';

import './week.css';

const Week = () => {
  return (
    <div className="week-container">
      <ul className="week-list">
        <div className="week-info">
          <span>Lunes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Martes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Miercoles</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Jueves</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Viernes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Sabado</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
        <div className="week-info">
          <span>Domingo</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        </div>
      </ul>
    </div>
  );
};

export default Week;
