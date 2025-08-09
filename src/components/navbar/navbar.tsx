import {useState} from 'react'
import Today from '../../pages/today/today';
import Tomorrow from '../../pages/tomorrow/tomorrow';
import Week from '../../pages/week/week';
import NextWeek from '../../pages/nextWeek/nextWeek';
import './navbar.css';
const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");

  const renderContent = () => {
    switch (activeLink) {
      case "home":
        return <Today id="home" />;
      case "tomorrow":
        return <Tomorrow id="tomorrow" />;
      case "week":
        return <Week id="week" />;
      case "nextWeek":
        return <NextWeek id="nextWeek" />;
      default:
        return null;
    }
  };
  return (
    <div className="navbar-container">
        <nav className="modal-nav">
        <ul className="nav-list">
          <a onClick={()=>setActiveLink("home")} className="nav-links" >Hoy</a>
          <a onClick={()=>setActiveLink("tomorrow")} className="nav-links" >Mañana</a>
          <a onClick={()=>setActiveLink("week")} className="nav-links" >Semana</a>
          <a onClick={()=>setActiveLink("nextWeek")} className="nav-links" >Siguiente Semana</a>
        </ul>
      </nav>
      <div className="tab-content">{renderContent()}</div>

    </div>
  )
}

export default Navbar