import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Search from './pages/Busca';
import UnavailableSearch from './pages/Busca-Indisponivel'

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/busca" component={Search} />
                <Route path="/busca-indisponivel" component={UnavailableSearch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;