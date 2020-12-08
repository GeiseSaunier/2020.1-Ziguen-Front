import React from 'react';
import { Link } from 'react-router-dom';
import Register_Trips from '../../components/Form/Register_Trip';

import '../../styles/pages/adm/register_trip.css'

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'

function Register_Trip() {
    return (
        <div id="adm_home">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className="header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/adm_home" className="inicio-link">Início</Link>
                        <Link to="/listed_trips" className="inicio-link">Viagens</Link>
                        <Link to="/" className="sair-link">Sair</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>

            {/*------------- Form Viagem ------------*/}
            <div className="cadastro_viagem">
                <h1>Cadastrar Viagem</h1>
                
                <div className="form-cadastro-viagem">
                    <Register_Trips />
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
export default Register_Trip;