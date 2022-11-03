import eSports from'../assets/projectImage/eSports.png'
import carShop from'../assets/projectImage/carShop.png'
import commercce from'../assets/projectImage/commerce.png'
import trybeFc from'../assets/projectImage/trybeFc.png'
import trybeSmith from'../assets/projectImage/trybeSmith.png'
import trybersDragons from'../assets/projectImage/trybersDragons.png'
import oneAll from'../assets/projectImage/oneAll.png'
import talkManager from'../assets/projectImage/talkManager.png'
import storeManager from'../assets/projectImage/storeManager.png'
import blogsApi from'../assets/projectImage/blogsApi.png'
import eleicoesUnit from'../assets/projectImage/capa.jpg'
import deliveryApp from'../assets/projectImage/deliveryApp.png'
import jobInsights from'../assets/projectImage/jobInsights.png'

export const projectsBackEnd = [
  {
    title: 'Delivery App',
    url: 'https://github.com/dedojs/App-Delivery',
    img: deliveryApp,
    desc: 'HTML, CSS, JavaScript, React, MySql, NodeJs. O App delivery é um projeto inicial de um e-commerce, um delivery para uma distribuidora de bebidas, mas esse mesmo aplicativo pode ser facilmente modificado e direcionado para qualquer seguimento comercial. O projeto consiste em uma aplicação full stack que faz a integração do back end com o banco de dados, e com o front end; No back end desenvolvemos uma api, que é responsável pela conexão, integração do front end com o Banco de dados'
  },
  {
    title: 'Eleições - Programação Web - Unit',
    url: 'https://github.com/dedojs/Eleicoes_Unit',
    img: eleicoesUnit,
    desc: 'HTML, CSS, JavaScript, React, Prisma, MySql, PHP. Sistema WEB, full stack, para contabilização de votos on-line para eleição de síndico e subsíndico de condomínios. O sistema permite o cadastro e consulta das chapas de síndico e subsíndico que irão concorrer a eleição, assim como a contabilização dos votos dos condôminos.',
  },
  {
    title: 'Job Insights - Python',
    url: 'https://github.com/dedojs/job-Insights---python',
    img: jobInsights,
    desc: 'Python. Esse projeto foi desenvolvido em #Python, com o intuito de analisar um conjunto dados de um arquivo #csv, extraídos do site Glassdoor e obtidos através do #Kaggle (plataforma que disponibiliza dados para cientistas de dados). Além do código para a manipulação dos dados do arquivo, foram desenvolvidos testes para assegurar o correto funcionamento da aplicação. O projeto foi incorporado a um aplicativo web previamente desenvolvido em #Flask.'
  },
  {
    title: 'RockSeat - nlw - Esports',
    url: 'https://github.com/dedojs/rocketSeat-nlwEsports',
    img: eSports,
    desc: 'HTML, CSS, JavaScript, React, Prisma, Sql, React Native. Evento realizado pela rocketSeat que desenvolveu um site e um aplicativo mobile destinado a jogos. Foi desenvolvido um site web, um app e um server que foi o back end da aplicação. No back end pode ser feito um CRUD, alimentando o front end da aplicação.'
  },
  {
    title: 'CarShop',
    url: 'https://github.com/dedojs/Car-Shop',
    img: carShop,
    desc: `TypeScript, Docker, Mongoose, MongoDB, API, POO, SOLID. Projeto de um CRUD em uma API RESTful, utilizando a linguagem TypeScript, seguindo a arquitetura MSC, aplicando os pilares de POO utilizando os princípios Solid, e utilizando o ODM Mongoose para manipular o banco de dados feito em MongoDB, um banco do tipo NoSQL.
    Foi utilizado as bibliotecas CHAI, SINON, ZOD, para testes e validações. Foram também desenvolvido testes que cobriram 80% da aplicação.`
  },
  {
    title: 'Commerce',
    url: 'https://github.com/dedojs/Commerce',
    img: commercce,
    desc: `MongoDB, JavaScript. Projeto onde foi utilizado um banco NoSql, e desenvolvido varias queries em mongoDB para manipular os dados do banco.`
  },
  {
    title: 'Trybe Futebol Clube',
    url: 'https://github.com/dedojs/TFC-Trybe-Futebol-Clube',
    img: trybeFc,
    desc: `NodeJs, ExpressJs, API REST, Arquitetura MSC, MySql,
    TypeScript, SOLID, Sequelize, Docker, Sinon, Mocha, Chai, POO. O TFC é um site informativo sobre partidas e classificações de
    futebol! Nesse projeto, foi desenvolvido um back-end dockerizado utilizando modelagem de
    dados através do Sequelize, respeitando regras de negócio providas no projeto. A API é
    consumida por um front-end já provido nesse projeto. Além do back-end foram desenvolvidos
    testes de integração para o back-end.`
  },
  {
    title: 'TrybeSmith',
    url: 'https://github.com/dedojs/TrybeSmith',
    img: trybeSmith,
    desc: `NodeJs, ExpressJs, API REST, Arquitetura MSC, MySql,
    TypeScript. Foi desenvolvido uma API que simula uma loja de itens medievais. A API possui
    as camadas MSC (Models, Service e Controllers) e será possível realizar um CRUD (Create,
    Read, Update e Delete), manipulando as informações em um banco de dados utilizando o
    MySQL.`
  },
  {
    title: 'Trybers and Dragons',
    url: 'https://github.com/dedojs/Trybers-and-Dragons',
    img: trybersDragons,
    desc: `NodeJs, ExpressJs, API REST, Arquitetura MSC, MySql,
    TypeScript. Projeto feito utilizando a linguagem TypeScript com os princípios da
    arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de
    papéis, mais conhecidos como jogos RPG (Role Playing Game).`
  },
  {
    title: 'One for All',
    url: 'https://github.com/dedojs/Projeto-Trybe-OneForAll',
    img: oneAll,
    desc: `SQL. Projeto onde foi feita a normalização de uma planilha, criando e povoando
    tabelas. Depois foram criadas 11 queries retornando os resultados solicitados nos desafios no
    Readme do projeto, segue link do repositório em anexo.`
  },
  {
    title: 'Talker Manager',
    url: 'https://github.com/dedojs/Talker-Manager',
    img: talkManager,
    desc: `NodeJs, ExpressJs, API REST. Aplicação de cadastro de talkers (palestrantes) em que será possível
    cadastrar, visualizar, pesquisar, editar e excluir informações. Foi desenvolvida uma API de um
    CRUD (Create, Read, Update, Delete), desenvolvendo alguns endpoints, que irão ler e escrever
    em um arquivo, utilizando módulo FS.`
  },
  {
    title: 'Store Manager',
    url: 'https://github.com/dedojs/Store-Manager',
    img: storeManager,
    desc: `NodeJs, ExpressJs, API RESTFULL, MySQL, Arquitetura
    MSC, Jest, Mocha, sinon, chai. desenvolvimento de uma API RESTFULL utilizando arquitetura MSC(model –
    service – controller). A aplicação é um sistema de gerenciamento de vendas no formato
    dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Foi
    utilizado o banco de dados MySQL para a gestão dos dados.
    Foi desenvolvidos também testes unitários para verificação e validação das rotas.`
  },
  {
    title: 'Blogs Api',
    url: 'https://github.com/dedojs/Blogs-Api',
    img: blogsApi,
    desc: `NodeJs, ExpressJs, API REST, SQL, SEQUELIZE. desenvolvimento de uma API RESTFULL utilizando arquitetura MSC(model –
    service – controller). Nesse projeto foi desenvolvido uma API e um banco de dados para a produção de
    conteúdo de um blog. Foram desenvolvidos endpoints conectados ao banco de dados seguindo
    o padrão REST. Foi utilizado a ORM Sequelize para fazer o mapeamento com o banco de dados.
    Foi utilizado a biblioteca JWT para a vreificação, validação e criação de um token.`
  },

]