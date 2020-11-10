import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Search from './pages/Busca';
import UnavailableSearch from './pages/Busca-Indisponivel'
import PaymentData from './pages/Dados-de-pagamento'

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/busca" component={Search} />
                <Route path="/busca-indisponivel" component={UnavailableSearch} />
                <Route path="/dados-de-pagamento" component={PaymentData} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;