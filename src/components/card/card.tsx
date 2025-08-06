import './card.css'

const Card = () => {
  return (
    <div className="card-container">
        <p className="card-time">Ahora</p>
            <img src="src/assets/intro.svg" style={{width:'24px', heigth:'24px' }} alt="" />
        <p className="card-temp">25°</p>
    </div>
  )
}

export default Card