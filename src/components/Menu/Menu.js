import React from 'react'
import { Search } from '../Search/Search'
import images from '../../assets/images.png'
import "./styles.css"


export const Menu = () => {

    return (
        <div className="menu">
            <div className="alineado">
            <img  alt="logo" className="logo" src={images}/>
                <Search />
                <ul className="menu-texto">
                    <li className="texto-item">
                        Catalogo
                    </li>
                    <li className="texto-item">
                        Producto Habituales
                    </li>
                </ul>
                
            </div>
            <div className="login texto-item">
                <p>Identificate</p>
            </div>
        </div>
    )
}
