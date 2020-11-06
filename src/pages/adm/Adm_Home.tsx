import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/adm/adm_home.css'

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'
import barco1 from '../../images/barco-ilustracao.jpg'
import tickets from '../../images/printer.png'
import lixo from '../../images/trash-can.png'
import lapis from '../../images/pencil.png'

function Adm_Home() {
    return (
        <div id="adm_home">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="inicio-link">Início</Link>
                    <Link to="/" className="sair-link">Sair</Link>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>


            <div className="saudacao">
                <h1>Olá, administrador!</h1>
            </div>

            
            <div className="dados">
                <div className="buttons-top">
                    <button className="owner-button" type="button">Proprietários</button>
                    <button className="boat-button" type="button">Embarcações</button>
                    <button className="trip-button" type="button">Viagens</button>
                </div>
                {/* Colocar barra de pesquisa  */}
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
                        <button className="boat-trips-button" type="button"><img src={tickets} alt="Viagens"/></button>
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