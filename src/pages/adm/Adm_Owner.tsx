import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'

import tickets from '../../images/printer.png'
import lixo from '../../images/trash-can.png'
import lapis from '../../images/pencil.png'


import lupa from '../../images/lupa.jpg'


function Adm_Owner() {
    return (
        <div id="adm_owner">
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

             {/*--------------- Mensagem ao Proprietário ---------------*/}
            <div className="saudacao">
                <h1>Proprietários</h1>
            </div>
                <form className="search-bar" action=" " method="post">
                    <input type="search" id="busca" name="q" />
                    <button type="submit"><img src={lupa} alt="Lupa"/></button>
                </form>

                 {/*--------------- Especificações do Proprietário ---------------*/}
                <div className="boats">
                <div className="boat">
                    <div className="num_identification">
                        <strong>Nome do proprietário</strong>
                    </div>
        
                    <strong>Tamanho da frota: 45 </strong>

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
export default Adm_Owner;