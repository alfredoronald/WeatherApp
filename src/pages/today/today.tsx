import React from 'react'

const Today = () => {
  return (
    <div>
        <div
        className="card-list"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="weather-details">
        <span>max: 26°</span>
        <span>min: 19°</span>
      </div>
      <div className="weather-details">
        <span>Viento: 16km-h</span>
        <span>Humedad: 66%</span>
      </div>

    </div>
  )
}

export default Today