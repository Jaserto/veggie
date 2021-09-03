import React from 'react'

import "./styles.css"
import Sidebar from "react-sidebar";
import { Menu } from '../Menu/Menu';
import { Footer } from '../Footer/Footer';
import Categorias from '../Categorias/Categorias';

const Catalogo = ({children}) => {

   
    return (
        <div>
            <Menu />
            <div>
                <Sidebar
                    transitions="false"
                    shadow="false"
                    sidebar={<Categorias />}
                    defaultSidebarWidth="900"
                    docked="true"
                    touch="true"  
                    styles={{ root:{top:80},sidebar: {background: "white",width:350, overflowX:'hidden'},content: {transition:false} }}
                >
                   {/*    <Menu /> */}
                      <div className="catalogo-card">
                        <div className="productos-card">
                            {children}
                        </div> 
                        <Footer /> 
                    </div>
                </Sidebar>
            </div>           
        </div>
    )
}


export default Catalogo;