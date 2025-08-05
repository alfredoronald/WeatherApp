import './card.css'

const Card = () => {
  return (
    <div className="card-container">
        <h3>Ahora</h3>
            <img src="src/assets/intro.svg" style={{width:'20px', heigth:'20px' }} alt="" />
        <p> 20°C</p>

    </div>
  )
}

export default Card