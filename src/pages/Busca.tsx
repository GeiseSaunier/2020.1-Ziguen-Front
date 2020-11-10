import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/pages/busca.css'
import '../styles/pages/header.css'
import '../styles/pages/home.css'

function Search() {
    return (
        <div id="busca">
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

export default Search;