import React from 'react';
import { Link } from 'react-router-dom';
import Register_Boats from '../../components/Form/Register_Boat';

import '../../styles/pages/adm/register_trip.css'

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'

function Register_Boat() {
    return (
        <div id="adm_home">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className="header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/" className="inicio-link">Início</Link>
                        <Link to="/" className="sair-link">Sair</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            {/*------------- Form Viagem ------------*/}
            <div className="cadastro_viagem">
                <h1>Cadastrar Embarcação</h1>
                
                <div className="form-cadastro-viagem">
                    <Register_Boats />
                </div>

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
export default Register_Boat;