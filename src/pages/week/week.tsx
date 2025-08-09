import React from 'react'

const Week = ({id}:string) => {
  return (
    <div>

      <div id={id}>Week</div>
      <nav className="modal-nav">
        <ul className="nav-list">
          <button onClick={()=>setActiveLink("home")} className="nav-links" >Hoy</button>
          <button onClick={()=>setActiveLink("tomorrow")} className="nav-links" >Mañana</button>
          <button onClick={()=>setActiveLink("week")} className="nav-links" >Semana</button>
          <button onClick={()=>setActiveLink("nextWeek")} className="nav-links" >Siguiente Semana</button>
        </ul>
      </nav>
    </div>
  )
}

export default Week