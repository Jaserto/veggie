import React from 'react'
import Layout from '../Layout'
import "./styles.css"

const Home = () => {
    return (
        <Layout title="home" >
            <div className="home">
                <h2>Productos del momento</h2>
                <p>Selección de productos destacados</p>
                <div className="banner">
                    <div className="banner-background">   
                    <div className="banner-contenido">
                        <h3 className="temporada-text">Temporada</h3>
                        <button className="boton-temporada">Ver productos</button>
                    </div>  
                    </div>
                </div>
                <hr/>
                <h2>Novedadades</h2>
                <p>Productos recién añadidos o mejorados</p>
            </div>
        </Layout>
    )
}

export default Home;