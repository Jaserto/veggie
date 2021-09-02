import React from 'react'
import "./styles.css"

const Categorias = () => {
    const categorias = ['🍉 Verduras','🍉 Frutas', '🍉 Carne', 
    '🍉 Pescado', '🍉 Lacteos', '🍉 Fruta Tropical',
    '🍉 Verduras','🍉 Frutas', '🍉 Carne', '🍉 Pescado',
     '🍉 Lacteos', '🍉 Fruta Tropical', 
     '🍉 Verduras','🍉 Frutas', '🍉 Carne', '🍉 Pescado', 
     '🍉 Lacteos', '🍉 Fruta Tropical',
     '🍉 Verduras','🍉 Frutas', '🍉 Carne', '🍉 Pescado', '🍉 Lacteos', '🍉 Fruta Tropical',]

    return (
        <div className="categorias">
            {categorias.map((categoria) => (
                <span className="categoria">{categoria}</span>
            ))}

        </div>
    )
}

export default Categorias;