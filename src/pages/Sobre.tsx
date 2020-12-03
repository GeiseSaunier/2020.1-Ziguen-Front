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
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                        <Link to="/" className="sobre-link">Sobre Nós</Link>
                    </div>
                </div>
                <div className="field">
                    <p>PASSAGENS FLUVIAIS</p>
                </div>
            </div>

            {/*--------------- Texto Sobre Nós ---------------*/}
            <h1>Sobre Nós</h1>
            <div className="caixa-texto-sobre">
                <p className="texto-sobre">Somos estudantes da Universidade de Brasília e idealizamos a Ziguen, uma startup do ramo fluvial que atua no estado do Amazonas. Ela surgiu a partir da necessidade de uma plataforma que facilitasse a compra e venda de passagens de barco entre cidades, de forma digital. Lá, a comercialização de passagens era feita apenas manualmente, o que ocasianava filas e esperas desnecessárias. Por este motivo, viemos para contribuir com a população local nesse processo.</p>
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