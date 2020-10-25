import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;