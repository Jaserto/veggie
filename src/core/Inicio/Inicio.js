import React, {useState } from 'react'
import { Menu } from '../../components/Menu/Menu';
import "./styles.css"
import { useHistory } from "react-router-dom";

const Inicio = () => {

 const [codigo, setCodigo] = useState('')
 const [error, setError] = useState('')
 let history = useHistory();


const codigos = ['46920','46000']
 const handleChange= name => event => {
    name === 'codigo' ? setCodigo(event.target.value) : setError('Codigo Postal no válido.') 
 }
const handleSubmit = (e) => {
   e.preventDefault();
   console.log(codigo);
   if(codigos.includes(codigo)){
       console.log('acceso permitido');
       localStorage.setItem('cPostal', JSON.stringify(codigo))
       history.push("/tienda");

   }else{
       console.log('a tu casa perro')
   }
   
}


    return (
        <div className="inicio">
                {/* <Menu /> */}
                <div className="contenedor">
                    <div className="contenedor1">
                        <span><h1>Empieza tu compra en Veggie</h1></span>
                   
                        <span><p>Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.
                        </p></span>
                       
                        <form className="formu" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Codigo Postal" className="input-inicio" value={codigo} onChange={handleChange('codigo')}/>
                            <button className="boton-formu">Entrar</button>
                        </form>
                        <h5>*Repartos disponibles solo en la ciudad de Valencia.</h5>
                       
                    </div>
                    
                </div>
        </div>
    )
}
export default Inicio;