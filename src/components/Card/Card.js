import React from 'react'
import './styles.css'
import pan from '../../assets/pan.png'



 const Card = () => {
    return (
        <div className="card">
            <div className="imagen-contenedor">
             <img className="imagen" alt="imagen" src={pan}></img>
            </div>
          
            <span className="nombre-producto">Pan mini Semillas</span>
            <span className="info-producto">1 ud.</span>
            <button className="button-producto">
                <span>Añadir al carro</span>
            </button>
        </div>
    )
}


export default Card;