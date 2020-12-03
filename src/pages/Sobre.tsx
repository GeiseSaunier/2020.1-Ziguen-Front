import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/pages/home.css'
import '../styles/pages/header.css'

function Sobre() {
    return (
        <div id="sobre-page">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                        <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                        <Link to="/" className="sobre-link">Sobre</Link>
                    </div>
                </div>
                <div className="field">
                    <p>PASSAGENS FLUVIAIS</p>
                </div>
            </div>


            {/*--------------- Footer ---------------*/}
            <div className="footer">
                <p>Nossas redes sociais</p>
                <div className="icones">
                    <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                    <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                </div>
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div>
        </div>
    )
}

export default Sobre;