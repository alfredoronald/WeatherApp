import SunIcon from '../../assets/icons/sun.svg';

import './week.css';

const Week = () => {
  return (
    <div className="week-container">
      <ul className="week-list">
        
          <span>Lunes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
        
          <span>Martes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
          <span>Miercoles</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
          <span>Jueves</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
          <span>Viernes</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
          <span>Sabado</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
        
          <span>Domingo</span>
          <img src={SunIcon} alt="icon" />
          <span>27</span>
          <span>18</span>
  
      </ul>
    </div>
  );
};

export default Week;
