import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ClientHome from './pages/Home-Cliente'
import Search from './pages/Busca';
import UnavailableSearch from './pages/Busca-Indisponivel'
import PaymentData from './pages/Dados-de-pagamento'
import Payment from './pages/Opcoes-de-pagamento'
import EditProfile from './pages/Editar-perfil'
import ReviewTicket from './pages/Revisao-de-compra'
import ClientTicket from './pages/Passagens-cliente'

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/home-cliente" component={ClientHome} />
                <Route path="/busca" component={Search} />
                <Route path="/busca-indisponivel" component={UnavailableSearch} />
                <Route path="/dados-de-pagamento" component={PaymentData} />
                <Route path="/pagamento" component={Payment} />
                <Route path="/editar-perfil" component={EditProfile} />
                <Route path="/revisao-de-compra" component={ReviewTicket} />
                <Route path="/passagens-cliente" component={ClientTicket} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;