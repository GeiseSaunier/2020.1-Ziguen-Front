import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/busca.css'
import '../styles/pages/header.css'
import '../styles/pages/home.css'

function ReviewTicket() {
    return (
        <div id="revisao-de-passagem">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="pagina-inicial-link">Página Inicial</Link>
                    <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            {/*--------------- Cards ---------------*/}
            <div className="cards">
                <div className = "space"></div>
                <div className="card">
                    <div className="container">
                        <div className = "titulo">
                            <h5>Nome da Embarcação:</h5>
                            <div className = "space"></div>
                            <p>Nome</p>
                        </div>
                        <div className = "informacoes">
                            <h5>Informações da Viagem:</h5>
                            <div className = "space"></div>
                            <p>Descrição da passagem.</p>
                        </div>
                        <div className = "preco">
                            <h5>Preço:</h5>
                            <div className = "space">
                            </div><p>R$00,00</p>
                        </div>
                        <button>Comprar</button>
                    </div>
                </div>
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

export default ReviewTicket;