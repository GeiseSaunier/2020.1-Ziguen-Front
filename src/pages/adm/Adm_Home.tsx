import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/adm/adm_home.css'

import api from '../../services/api'

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg'
import instagramImg from '../../images/instagram.svg'
import lupa from '../../images/lupa.jpg'
import barco1 from '../../images/barco-ilustracao.jpg'
import tickets from '../../images/ticket.jpeg'
import lixo from '../../images/trash-can.png'
import lapis from '../../images/pencil.png'
import plus from '../../images/plus-sign.png'

interface Boats {
    name: string;
    id: string
}

function Adm_Home() {

    const [boats, setBoats] = useState<Boats[]>([]);

    useEffect(() => {
        api.get('/boats/').then(response1 => {
            setBoats(response1.data);
            console.log(response1)
        });
    }, []);

    return (
        <div id="adm_home">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className="header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/adm_home" className="inicio-link">Início</Link>
                        <Link to="/listed_owners" className="proprietario-link">Proprietário</Link>
                        <Link to="/" className="sair-link">Sair</Link>
                    </div>
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
            {boats.map(boat => {
                return (        
                    <div className="boats">
                        <div className="boat">
                            <div className="num_identification">
                                <strong>#{boat.id}</strong>
                            </div>
                            <img className="boat_photo" src={barco1} alt="Foto Barco"/>
                            <strong>{boat.name}</strong>

                            <div className="buttons_boat">
                                <button className="trips-button" type="button"><img src={tickets} alt="Viagens"/></button>
                                <button className="delete-boat-button" type="button"><img src={lixo} alt="Deletar"/></button>
                                <button className="edit-boat-button" type="button"><img src={lapis} alt="Editar"/></button>
                            </div>
                        </div>
                    </div>
                )
            })}
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
export default Adm_Home;