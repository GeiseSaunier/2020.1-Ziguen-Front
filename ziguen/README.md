<p align = "center">
  <img src="https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/imagens/logo.png"/>
</p>

![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)

## Padrão de contribuição
* Configuração do ambiente de desenvolvimento

* [Template criação de issues](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/master/docs/templates/issue_template/issue_template.md)

* [Template criação de commit](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/master/docs/templates/commit_template/commit_policy.md)

* [Template criação de pull request](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/master/docs/templates/pull_request_template/pull_request_template.md)

## Como rodar o ziguen na minha maquina? 🤔🤔

## Configuração do ambiente de desenvolvimento


 1- [**Instalação do Docker e Docker-compose**](https://github.com/francisco1code/docs/blob/master/Docker-e-Docker-compose.md)

Verifique sua versão
  
    docker -v && docker-compose -v

2- Faça o clone do projeto

       git clone https://github.com/fga-eps-mds/2020.1-Ziguen-Front.git

3- Crie uma conexao local do docker na sua máquina para que o docker do front e backend possam se comunicar.

        docker network create network-api

# Comandos

  1- Construir o container
        
     make build
  2- Subir o container

    make up


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
