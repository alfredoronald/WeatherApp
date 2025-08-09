import { useState } from 'react';
import Today from '../../pages/today/today';
import Tomorrow from '../../pages/tomorrow/tomorrow';
import Week from '../../pages/week/week';
import NextWeek from '../../pages/nextWeek/nextWeek';
import './modal.css';

const Modal = () => {
    const [showModal, setShowModal] = useState(true);
    const [activeLink, setActiveLink] = useState("home");
     switch (activeLink) {
      case "home":
        return <Today id="home" />
      case "tomorrow":
        return <Tomorrow id="tomorrow" />
      case "week":
        return <Week id="week" />
      case "nextWeek":
        return <NextWeek id="nextWeek" />  
      default:
        return null;
     }

  return (
    <div className={`modal-container${!showModal ? ' hidden' : ''}`}>
      <div onClick={() => setShowModal(!showModal)} className="modal-button">
        {showModal ? <img src="/src/assets/icons/arrowdown.svg"/> : <img src="/src/assets/icons/arrowup.svg"/>}
      </div>
      <nav className="modal-nav">
        <ul className="nav-list">
          <button onClick={()=>setActiveLink("home")} className="nav-links" >Hoy</button>
          <button onClick={()=>setActiveLink("tomorrow")} className="nav-links" >Mañana</button>
          <button onClick={()=>setActiveLink("week")} className="nav-links" >Semana</button>
          <button onClick={()=>setActiveLink("nextWeek")} className="nav-links" >Siguiente Semana</button>
        </ul>
      </nav>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Modal;
