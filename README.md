<p align = "center">
  <img src="https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/imagens/logo.png"/>
</p>

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Como rodar o ziguen na minha maquina? 🤔🤔

## Configuração do ambiente de desenvolvimento


 1- [**Instalação do Docker e Docker-compose**](https://github.com/francisco1code/docs/blob/master/Docker-e-Docker-compose.md)

Verifique sua versão
  
    docker -v && docker-compose -v

2- Faça o clone do projeto

       git clone https://github.com/fga-eps-mds/2020.1-Ziguen-Front.git
       
3- Crie uma conexao local do docker na sua máquina para que o docker do front e backend possam se comunicar.

        docker network create network-api

## Comandos

  1- Construir o container
        
     make build
  2- Subir o container

    make up

  3- Derrubar container
      
    make down
    
 

## Sobre o ziguen
[Ambiente de homologação](https://ziguen-web-front-end.herokuapp.com/)

[Documentação](https://fga-eps-mds.github.io/2020-1-Ziguen/)

[Back-end](https://github.com/fga-eps-mds/2020-1-Ziguen)

## Referências
 * [**Documentação Docker**](https://docs.docker.com/get-docker/)

 * [**Documentação Docker-compose**](https://docs.docker.com/compose/)
