import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../images/logo.png';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import cartaoImg from '../images/cartao-de-credito.png'
import boletoImg from '../images/boleto-bancario.jpg'

import '../styles/pages/opcoes-de-pagamento.css'
import '../styles/pages/header.css'
import '../styles/pages/footer.css'

function Payment() {
    return (
        <div id="opcoes-de-pagamento">
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="pagina-inicial-link">Página Inicial</Link>
                    <Link to="/" className="registration-link">Cadastrar-se</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            <h1>Formas de Pagamento</h1>

            <div className="formas-de-pagamento">
                <div className = "cartao-de-credito">
                    <div>
                        <input type = 'radio' name = "pagamento"/>
                        <label htmlFor=""> Cartão de Crédito</label>
                    </div>
                    <img src = {cartaoImg} alt="cartao"/>
                    <select name="Escolha o cartão que deseja utilizar" id="escolha-cartao">
                        <option value="1">Cartão A</option>
                        <option value="2">Cartão B</option>
                    </select>
                    <button>Cadastrar novo cartão</button>
                    <button>Revisar Dados e Finalizar Compra</button>
                </div>
                <div className="division-bar"></div>
                <div className = "boleto-bancario">
                    <div>
                        <input type = 'radio' name = "pagamento"/>
                        <label htmlFor=""> Boleto Bancário</label>
                    </div>
                    <img src = {boletoImg} alt="boleto"/>
                    <button>Gerar Boleto e Finalizar Compra</button>
                </div>
            </div>

            <div className = "continuar-compra">
                <button>Continuar Comprando</button>
            </div>

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

export default Payment;