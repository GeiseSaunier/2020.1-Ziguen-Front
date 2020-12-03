import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import qrcodeImg from '../images/qr-code.png'
import pdfImg from '../images/pdf.png'

import '../styles/pages/revisao-de-compra.css'
import '../styles/pages/header.css'
import '../styles/pages/home.css'

function ReviewTicket() {
    return (
        <div id="revisao-de-passagem">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="./Passagens-cliente" className="minhas-passagens-link">Minhas Passagens</Link>
                        <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                        <Link to="/" className="logout-link">Encerrar Sessão</Link>
                        <Link to="./about" className="sobre-link">Sobre</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            <h1>Detalhes da Compra</h1>
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
                        <div className = "qr-code">
                            <img src={qrcodeImg} alt="QR Code"/>
                        </div>
                        <div className = "pdf">
                            <button><img src={pdfImg} alt="Gerar PDF"/></button>
                        </div>
                    </div>
                    <div className = "container1">
                        <div className = "saida-chegada">
                            <h5>Saída:</h5>
                            <p>00/00/00</p>
                            <div className = "space"></div>
                            <h5>Chegada:</h5>
                            <p>00/00/00</p>
                        </div>
                        <div className = "horario">
                            <h5>Horário:</h5>
                            <p>00:00</p>
                            <div className = "space"></div>
                            <h5>Horário:</h5>
                            <p>00:00</p>
                        </div>
                        <div className = "cidade">
                            <h5>Origem:</h5>
                            <p>Cidade</p>
                            <div className = "space"></div>
                            <h5>Destino:</h5>
                            <p>Cidade</p>
                        </div>
                        <div className = "id">
                            <h5>ID:</h5>
                            <p>0XOOXX</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*--------------- Botões ---------------*/}
            <div className = "botoes">
                <button>Cancelar Compra</button>
                <button id = "finalizar-compra">Finalizar Compra</button>
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

export default ReviewTicket;