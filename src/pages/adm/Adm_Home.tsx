import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/adm/adm_home.css'

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'
import lupa from '../../images/lupa.jpg'
import barco1 from '../../images/barco-ilustracao.jpg'
import tickets from '../../images/ticket.jpeg'
import lixo from '../../images/trash-can.png'
import lapis from '../../images/pencil.png'
import plus from '../../images/plus-sign.png'

function Adm_Home() {
    return (
        <div id="adm_home">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="inicio-link">Início</Link>
                    <Link to="/listed_owners" className="proprietario-link">Proprietário</Link>
                    <Link to="/" className="sair-link">Sair</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>


            <div className="saudacao">
                <div className="title">
                    <h1>Embarcações</h1>
                    <Link to="/register_boat" className="register-button"><img src={plus} alt="Cadastrar Embarcação"/></Link>
                </div>
            
                <form className="search-bar" action=" " method="post">
                    <input type="search" id="busca" name="q" />
                    <button type="submit"><img src={lupa} alt="Lupa"/></button>
                </form>
            </div>

            {/*---------Embarcação--------*/}
            <div className="boats">
                <div className="boat">
                    <div className="num_identification">
                        <strong>#0000</strong>
                    </div>
                    <img className="boat_photo" src={barco1} alt="Foto Barco"/>
                    <strong>Embarcação / Proprietário</strong>

                    <div className="buttons_boat">
                        <button className="trips-button" type="button"><img src={tickets} alt="Viagens"/></button>
                        <button className="delete-boat-button" type="button"><img src={lixo} alt="Deletar"/></button>
                        <button className="edit-boat-button" type="button"><img src={lapis} alt="Editar"/></button>
                    </div>
                </div>
            </div>

            {/*--------------- Footer ---------------*/}
            <div className="footer">
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
export default Adm_Home;