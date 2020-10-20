import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';


import '../styles/pages/home.css'

import slide1Img from '../images/slide-1-teste.jpg'
import slide2Img from '../images/slide-2-teste.jpg'
import slide3Img from '../images/slide-3-teste.jpg'

function Home() {
    return (
        <div id="home-page">
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                    <Link to="./Login" className="login-link">Iniciar Sessão</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <p>Passagens Fluviais</p>
                </div>
            </div>
            <div className = "carousel">
                <CarouselProvider className="carousel-provider"
                    naturalSlideWidth={480}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}><img src={slide1Img} /></Slide>
                        <Slide index={1}><img src={slide2Img} /></Slide>
                        <Slide index={2}><img src={slide3Img} /></Slide>
                    </Slider>
                    <ButtonBack className="button-back">&#171;</ButtonBack>
                    <ButtonNext className="button-next">&#187;</ButtonNext>
                </CarouselProvider>
            </div>
            <div className="search">
                <p>Encontre suas passagens de Barco:</p>
                <div className="input-block">
                    <label htmlFor="origin">Origem </label>
                    <input id="origin" />
                </div>
                <div className="input-block1">
                    <label htmlFor="destination">Destino </label>
                    <input id="origin" />
                </div>
                <div className="input-block2">
                    <label htmlFor="day">Data de Ida </label>
                    <input id="origin" />
                </div>
                <button>Buscar</button>
            </div>
            <div className="cards">
                <h4>Mais Buscadas em sua região</h4>
            </div>
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

export default Home;