import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/pages/busca-indisponivel.css'
import '../styles/pages/header.css'
import '../styles/pages/home.css'

function UnavailableSearch() {
    return (
        <div id="busca-indisponivel">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                    <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            {/*--------------- Search ---------------*/}
            <div className="search">
                <b><p>Encontre suas passagens de Barco:</p></b>
                <div className = "labels">
                    <b><label id = "origin">Origem</label></b>
                    <b><label id = "destination">Destino</label></b>
                    <b><label id = "day">Data</label></b>
                </div>
                <div className="input-block">
                    <input id="origin" placeholder = "Cidade"/>
                    <input id="destination" placeholder = "Cidade"/>
                    <input id="day" placeholder = "dd/mm/aa" type = "date"/>
                    <Link to = "/"><button>Buscar</button></Link>
                </div>
            </div>
            {/*--------------- Text Message ---------------*/}
            <div className = "unavailable">
                <p>Não encontramos passagens disponíveis para sua busca.</p>
                <p>Tente Novamente.</p>
                <p><Link to = "/"></Link></p>
            </div>
            {/*--------------- Footer ---------------*/}
            <div className="footer">
                <p>Barcos Parceiros</p>
                <p>&#128674; &#128674; &#128674; &#128674;</p>
                <p className="hr"></p>
                <p>Nossas redes sociais</p>
                <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div>
        </div>
    )
}

export default UnavailableSearch;