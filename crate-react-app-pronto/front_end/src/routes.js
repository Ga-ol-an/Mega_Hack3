import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home'
import Livro from './Pages/Livro'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/livro' exact component={Livro}></Route>
            </Switch>
        </BrowserRouter>
    )
}