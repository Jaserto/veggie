import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CatalogoPrincipal from './core/Catalogo/CatalogoPrincipal';
import Habituales from './core/Habituales/Habituales';
import Home  from './core/Home/Home';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={Home} />
                 <Route path="/catalogo" exact component={CatalogoPrincipal} />
                 <Route path="/habituales" exact component={Habituales} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;