import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/busca-indisponivel.css'
import '../styles/pages/header.css'
import '../styles/pages/home.css'

function UnavailableSearch() {
    return (
        <div id="busca-indisponivel">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                        <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                        <Link to="/" className="sobre-link">Sobre</Link>
                        <Link to="/" className="ajuda-link">Ajuda</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            {/*--------------- Search ---------------*/}
            <div className="search">
                <b><p>Encontre suas passagens de Barco:</p></b>
                <div className="input-block">
                    <div className="input-block1">
                        <b><label id="origin">Origem</label></b>
                        <input id="origin" placeholder="Cidade" />
                    </div>
                    <div className="input-block2">
                        <b><label id="destination">Destino</label></b>
                        <input id="destination" placeholder="Cidade" />
                    </div>
                    <div className="input-block3">
                        <b><label id="day">Data</label></b>
                        <input id="day" placeholder="dd/mm/aa" type="date" />
                    </div>
                    <Link to="/"><button>Buscar</button></Link>
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
                <div className = "icones">
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

export default UnavailableSearch;