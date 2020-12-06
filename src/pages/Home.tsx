import React, { useEffect, useState } from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/pages/home.css'
import '../styles/pages/header.css'

import api from '../services/api'

import slide1Img from '../images/slide-1-teste.jpg'
import slide2Img from '../images/slide-2-teste.jpg'
import slide3Img from '../images/slide-3-teste.jpg'
import barcoImg from '../images/barco-ilustracao.jpg'

interface Trips {
    origin: string;
    destiny: string;
    hour: string;
    date: string;
    price: string;
    boat_id: string
}

interface Boats {
    name: string;
    id: string
}

function Home() {

    const [trips, setTrips] = useState<Trips[]>([]);
    const [boats, setBoats] = useState<Boats[]>([]);

    useEffect(() => {
        api.get('/trips').then(response => {
            setTrips(response.data);
            console.log(response);
        });
        api.get('/boats/').then(response1 => {
            setBoats(response1.data);
            console.log(response1)
        });
    },  []);

    


    return (
        <div id="home-page">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                        <Link to="./Registration" className="mais-vendidas-link">Criar Cadastro</Link>
                        <Link to="./about" className="sobre-link">Sobre Nós</Link>
                    </div>
                </div>
                <div className="field">
                    <p>PASSAGENS FLUVIAIS</p>
                </div>
            </div>
            {/*--------------- Carousel --------------*/}
            <div className="carousel">
                <CarouselProvider className="carousel-provider"
                    naturalSlideWidth={480}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <Slider className="slider">
                        <Slide index={0} className="slide slide1"><img src={slide1Img} alt="slide1" /></Slide>
                        <Slide index={1} className="slide slide2"><img src={slide2Img} alt="slide2" /></Slide>
                        <Slide index={2} className="slide slide3"><img src={slide3Img} alt="slide3" /></Slide>
                    </Slider>
                    <ButtonBack className="button button-back">&#171;</ButtonBack>
                    <ButtonNext className="button button-next">&#187;</ButtonNext>
                </CarouselProvider>
            </div>
            {/*--------------- Search ---------------*/}
            <div className="search">
                <b><p>Encontre suas passagens de Barco:</p></b>
                <div className="input-block">
                    <div className="input-block1">
                        <b><label id="origin">Origem</label></b>
                        <input id="origin" placeholder="Cidade" type="search" />
                    </div>
                    <div className="input-block2">
                        <b><label id="destination">Destino</label></b>
                        <input id="destination" placeholder="Cidade" type="search" />
                    </div>
                    <div className="input-block3">
                        <b><label id="day">Data</label></b>
                        <input id="day" placeholder="dd/mm/aa" type="date" />
                    </div>
                    <Link to="/"><button>Buscar</button></Link>
                </div>
            </div>

            <h3 className="sugestion">Sugestões para Você!</h3>

            {/*--------------- Cards ---------------*/}
            {trips.map (trip => {
                    return (
                        <div className="cards">
                            <div className="space"></div>
                            <div className="card">
                                {boats.map(boat => {
                                    return (
                                        <h4>{boat.id == trip.boat_id ? boat.name : ''}</h4>
                                    )
                                })}
                                <div className="space"></div>
                                <div className = "img-card">
                                    <img src={barcoImg} className="img-barco" alt="barco" />
                                </div>
                                <div className="container">
                                    <h5>{trip.origin} - {trip.destiny}</h5>
                                    <div className="space"></div>
                                    <p className="info-name">Data:  </p> <strong className="info">{trip.date}</strong>
                                    <p className="info-name">Horário:  </p> <strong className="info">{trip.hour}</strong>
                                    <div className="space"></div>
                                    <strong className="price">Preço: R$ {trip.price}</strong>
                                    <div className="space"></div>
                                    <div className = "botao-card">
                                        <Link to="/Login"><button>Comprar</button></Link>
                                    </div>
                                    <div className="space"></div>
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

export default Home;