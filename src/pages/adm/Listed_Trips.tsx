import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'

import lixo from '../../images/trash-can.png'
import lapis from '../../images/pencil.png'


import lupa from '../../images/lupa.jpg'

function Listed_Trips() {
    return (
        <div id="listed_trips">
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

            <div className="boats">
                <div className="boat">
                    <div className="num_identification">
                        <strong>#0000</strong>    
                    </div>
                    <strong>Barco: Ziguen x</strong>
                    <strong>Total de viagens: 100 Viagens Viagens passadas: 200 Viagens futuras: 800</strong>
                </div>
            </div>

             {/*--------------- Viagens ---------------*/}
             <div className="saudacao">
                <h1>Viagens</h1>
            </div>
                <form className="search-bar" action=" " method="post">
                    <input type="search" id="busca" name="q" />
                    <button type="submit"><img src={lupa} alt="Lupa"/></button>
                </form>

                {/*--------------- Viagens listadas ---------------*/}
                <div className="boats">
                <div className="boat">
                    <div className="num_identification">
                        <strong>#0000</strong>
                    </div>
        
                    <strong>Origem</strong> <strong>Data</strong>  <strong>Valor</strong> 
                    <strong>Destino</strong> <strong>Horário</strong> <strong>Passagens disponíveis</strong>

                    <div className="buttons_boat">
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
export default Listed_Trips;