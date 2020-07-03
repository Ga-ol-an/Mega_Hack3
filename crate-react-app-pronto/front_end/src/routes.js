import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home'
import Livro from './Pages/Livro'
import Leitura from './Pages/Leitura'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/livro' exact component={Livro}></Route>
                <Route path='/leitura' exact component={Leitura}></Route>
            </Switch>
        </BrowserRouter>
    )
}