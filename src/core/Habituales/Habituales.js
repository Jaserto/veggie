import React from 'react'
import Card from '../../components/Card/Card';
import Catalogo from '../../components/Catalogo/Catalogo';
import auth from '../../assets/auth.png'

const Habituales = () => {
    const noAuth = (
        <div className="catalogo-card">
            <span>No estás autenticado, autenticate para elegir tus habituales</span>
            <img src={auth} alt="no-autenticado" />
        </div>
        
    );
    return (
        <Catalogo children={noAuth}/>
    )
}

export default Habituales;