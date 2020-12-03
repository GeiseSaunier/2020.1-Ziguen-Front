import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Sobre from './pages/Sobre';

import ClientHome from './pages/Home-Cliente'
import Search from './pages/Busca';
import UnavailableSearch from './pages/Busca-Indisponivel'
import PaymentData from './pages/Dados-de-pagamento'
import Payment from './pages/Opcoes-de-pagamento'
import EditProfile from './pages/Editar-perfil'
import ReviewTicket from './pages/Revisao-de-compra'
import ClientTicket from './pages/Passagens-cliente'

import Adm_Home from './pages/adm/Adm_Home'
import Register_Trip from './pages/adm/Register_Trip'
import Listed_Trips from './pages/adm/Listed_Trips'
import Listed_Owners from './pages/adm/Listed_Owners'
import Register_Owner from './pages/adm/Register_Owner';
import Register_Boat from './pages/adm/Register_Boat';


function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/about" component={Sobre} />

                {/*------Cliente-----*/}
                <Route path="/home-cliente" component={ClientHome} />
                <Route path="/busca" component={Search} />
                <Route path="/busca-indisponivel" component={UnavailableSearch} />
                <Route path="/dados-de-pagamento" component={PaymentData} />
                <Route path="/pagamento" component={Payment} />
                <Route path="/editar-perfil" component={EditProfile} />
                <Route path="/revisao-de-compra" component={ReviewTicket} />
                <Route path="/passagens-cliente" component={ClientTicket} />

                {/*-------ADM------*/}
                <Route path="/adm_home" component={Adm_Home} />

                <Route path="/register_trip" component={Register_Trip} />
                <Route path="/register_owner" component={Register_Owner} />
                <Route path="/register_boat" component={Register_Boat} />

                <Route path="/listed_owners" component={Listed_Owners} />
                <Route path="/listed_trips" component={Listed_Trips} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;