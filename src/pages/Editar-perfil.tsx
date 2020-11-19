import React from 'react';
import { Link } from 'react-router-dom';
import EditarPerfil_Form from '../components/Form/Editar-perfil';

import logoImg from '../images/logo.png';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/editar-perfil.css'
import '../styles/pages/header.css'
import '../styles/pages/footer.css'

function EditProfile() {
    return (
        <div id="editar-perfil-page">
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="./Passagens-cliente" className="minhas-passagens-link">Minhas Passagens</Link>
                        <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                        <Link to="/" className="logout-link">Encerrar Sessão</Link>
                        <Link to="/" className="sobre-link">Sobre</Link>
                        <Link to="/" className="ajuda-link">Ajuda</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            <div className="editar-perfil-form">
                <EditarPerfil_Form />
            </div>

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

export default EditProfile;