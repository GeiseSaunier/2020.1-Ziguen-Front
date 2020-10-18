import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/logo.png';

import '../styles/pages/login.css'

function Login() {
    return (
        <div id="login-page">
            <div className="top-bar">
                <header>
                    <img src={logoImg} alt="Logo" className="img-logo"/>

                    <div className="navbar">
                        <Link to="/" className="home-link">Página Inicial</Link>
                        <Link to="/" className="home-link">Página Inicial</Link>
                        <Link to="/" className="home-link">Página Inicial</Link>
                    </div>
                </header>
                <div className="field">Passagens Fluviais</div>
            </div>
        </div>

    )
}

export default Login;