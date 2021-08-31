import React from 'react'
import { Search } from '../Search/Search'
import images from '../../assets/images.png'
import "./styles.css"


export const Menu = () => {

    return (
        <div className="menu">
            <div className="alineado">
            <img  alt="logo" loading="lazy" className="logo" src={images}/>
                <Search />
                <ul className="menu-texto">
                    <li>
                        Catalogo
                    </li>
                    <li>
                        Producto Habituales
                    </li>
                </ul>
            </div>
            <div className="login">
                <p>Identificate</p>
            </div>
        </div>
    )
}
