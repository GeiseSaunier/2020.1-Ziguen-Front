import React from 'react';
import { Link } from 'react-router-dom';
import Login_Form from '../components/Form/Login';

import logoImg from '../images/logo.png';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import ilustracaoBarco from '../images/ilustração-barco.png'
import ilustracaoInov from '../images/ilustração-inovação.png'
import ilustracaoLocal from '../images/ilustração-localização.png'

import '../styles/pages/login-registration.css'
import '../styles/pages/header.css'
import '../styles/pages/footer.css'

function Login() {
    return (
        <div id="login-page">
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="pagina-inicial-link">Página Inicial</Link>
                    <Link to="./Registration" className="registration-link">Cadastrar-se</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            <div className="page_filling">
                <div className="purpose">
                    <p className="purpose-text">Mover e acelerar pessoas para impulsionar o mundo de forma democrática, criativa e inovadora</p>
                    <div className="purpose-images">
                        <img className="ilustration" src={ilustracaoBarco} alt="Ilustração Barco"/>
                        <img className="ilustration" src={ilustracaoInov} alt="Ilustração Inovação"/>
                        <img className="ilustration" src={ilustracaoLocal} alt="Ilustração Localização"/>
                    </div>
                </div>
                <div className="division-bar"></div>
                <div className="login_form">
                    <Login_Form />
                </div>
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

export default Login;