import React from 'react'
import Card from '../../components/Card/Card';
import Catalogo from '../../components/Catalogo/Catalogo';

const CatalogoPrincipal = () => {
    const cardmap = Array(15).fill(<Card />);
    return (
        <Catalogo children={cardmap}/>
    )
}

export default CatalogoPrincipal;