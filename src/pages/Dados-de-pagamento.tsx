import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import PaymentData_Form from '../components/Form/Dados-de-pagamento';

import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/busca.css'
import '../styles/pages/header.css'
import '../styles/pages/dados-de-pagamento.css'

function PaymentData() {
    return (
        <div id="payment-data">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className="header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="./Passagens-cliente" className="minhas-passagens-link">Minhas Passagens</Link>
                        <Link to="/" className="logout-link">Encerrar Sessão</Link>
                        <Link to="./about" className="sobre-link">Sobre Nós</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            <div className = "dados-pagamentos">
                <h1>Dados de Pagamento</h1>
                <div className="paymentdata_form">
                    <PaymentData_Form />
                </div>
            </div>

            {/*--------------- Footer ---------------*/}
            <div className="footer">
                <p>Barcos Parceiros</p>
                <p>&#128674; &#128674; &#128674; &#128674;</p>
                <p className="hr"></p>
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

export default PaymentData;