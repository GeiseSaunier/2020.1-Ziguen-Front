import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';

import '../styles/pages/home.css'

function Home() {
    return (
        <div id="home-page">
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                    <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <p>Passagens Fluviais</p>
                </div>
                <div className="search">
                    <p>Encontre suas passagens de Barco:</p>
                    <div className="input-block">
                        <label htmlFor="origin">Origem</label>
                        <input id="origin" />
                    </div>
                    <div className="input-block1">
                        <label htmlFor="destination">Destino</label>
                        <input id="origin" />
                    </div>
                    <div className="input-block2">
                        <label htmlFor="day">Data de Ida</label>
                        <input id="origin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;