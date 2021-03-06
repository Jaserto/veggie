import React,{useState, useEffect} from 'react'
import { Search } from '../Search/Search'
import logo from '../../assets/logo.png'
import "./styles.css"
import { Link } from 'react-router-dom'



export const Menu = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        click ? setClick(false) : setClick(true)
    }

    const [postalC, setPostalC] = useState('')
    const postal = localStorage.getItem('cPostal');
    const retorno = () => {
      if(postal !== ''){
        setPostalC(postal);
      }
      return postalC;
    }

   useEffect(() => {
    retorno()
   }, [])


    return (
        <div className="menu">
            <div className="alineado">
            <a href="/">
             <img  alt="logo" className="logo" src={logo}/>
            </a>
           {/*  <img  alt="logo" className="logo" src={logo}/> */}
                <Search />
                <ul className="menu-texto">
                    <li className="texto-item">
                    <Link to="/catalogo" className="link">
                         <span className="nav-item">Catálogo</span>
                    </Link>
             
                    </li>
                    <li className="texto-item">
                    <Link to="/habituales" className="link">
                         <span className="nav-item">Productos Habituales</span>
                    </Link>
                    </li>
                </ul>
                
            </div>
            <div className="login texto-item">

               
                   
                        <span className="login nav-item" onClick={handleClick}>Identifícate</span>    
              
                    <div className={click ? 'indentify' : 'none'}>
                   
                        <form className="formulario">
                        <span style={{color:'black', paddingBottom:'14px'}}>Entregar a: Mislata - {postalC}</span>
                            <span style={{ marginBottom: '20px'}}>Inicio de sesión</span>
                   
                           <input type="text" placeholder="Nombre de usuario" className="input-form"/>
                
                           <input type="password" placeholder="Introduce tu contraseña" className="input-form" />
                        
                           <button className="buttom-form">Ingresar</button>
                           <span style={{ marginTop: '20px'}}>¿No tienes cuenta? Regístrate aquí.</span>
                        </form>
                       
                        
                    </div>  
                    <div className="circle">
                       <span style={{color:'white'}}>2</span>
                    </div>
                <span className="icon-cart nav-item"><svg fill="#3b3935b3" height="28px" viewBox="0 -31 512.00033 512" width="28px"><path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"/><path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"/><path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"/></svg></span>
               

            </div>
        </div>
    )
}
