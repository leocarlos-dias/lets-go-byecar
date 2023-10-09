# 🚗 Lets Go Byecar

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## 📖 Sobre

Bem-vindo ao repositório do projeto **Lets Go Byecar**. Desafiado pela empresa, este projeto combina uma interface client-side de 4 páginas e um backend server-side para simular autenticação e recuperação de informações de usuários via token de uma API terceira.

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- JWT (Json Web Token)
- Jest
- Git & GitHub

## 📁 Estrutura do Projeto

```
.
├── client
├── public
└── src
├── components
├── hooks
└── ...

server
└── src
├── application
│ └── usecase
├── domain
│ └── entities
├── infrastructure
│ ├── controllers
│ ├── http
│ ├── routes
│ └── services
└── ...
```

## 📑 Índice

- [Visão Geral](#visão-geral)
- [Navegação Client-Side](#navegação-client-side)
- [Autenticação via Token](#autenticação-via-token)
- [Busca de Informações do Usuário](#busca-de-informações-do-usuário)
- [Instalação e Execução](#instalação-e-execução)
- [Contato](#contato)
- [Contribuições](#contribuições)

### Visão Geral

O **Lets Go Byecar** é composto por 4 páginas na parte client-side. Através dos botões no cabeçalho, os usuários podem navegar entre essas páginas. Na primeira página, é realizada uma requisição ao server-side solicitando um token de autorização, simulando uma comunicação com uma API terceira. Com este token, na quarta página, os usuários podem buscar informações detalhadas fornecidas pela mesma API.

A API server-side possui dois endpoints:

* /login
* /users

O primeiro endpoint é responsável por simular a requisição de um token de autorização a uma API terceira. O segundo endpoint é responsável por simular a requisição de informações do usuário a uma API terceira.

O login é realizado com um email e senha padrão, que são <code>email@example.com</code> e <code>example.password</code>, respectivamente. O token de autorização é gerado com base no usuário e senha fornecidos, e é válido por 60 minutos.

Para buscar as informações do usuário, é necessário fornecer o token de autorização obtido anteriormente. Este token é verificado e, se válido, as informações do usuário são retornadas.

### Navegação Client-Side

O aplicativo client-side dispõe de 4 páginas principais:

1. Página de Solicitação de Token
2. Página 2
3. Página 3
4. Página de Busca de Informações do Usuário

### Autenticação via Token

O token de autorização é solicitado na primeira página e é fornecido pelo server-side, simulando uma interação com uma API terceira. Este token é essencial para acessar recursos protegidos no aplicativo, como a busca de informações do usuário na quarta página.

### Busca de Informações do Usuário

Com o token em mãos, na quarta página, os usuários podem buscar suas informações detalhadas. Essa busca é processada pelo server-side, que consulta a API terceira e recupera as informações do usuário associadas ao token.

### Instalação e Execução

1. Clone o repositório.
2. Acesse o diretório `client` e depois `server`.
3. Instale as dependências com `npm install` ou `yarn install`.
4. Execute o projeto com `npm start` ou `yarn start`.

O `client` será executado na porta `5173`, já o `server` será executado na porta `3001`.

### Testes

Para executar os testes, vá para o diretório `server` e execute `npm run test` ou `yarn test`.

### Contato

Para quaisquer dúvidas ou feedbacks, por favor entre em contato através de [leocsdias@hotmail.com].

### 🤝 Contribuições

Todas as contribuições são bem-vindas! Se desejar melhorar o **Lets Go Byecar**, sinta-se à vontade para abrir um pull request ou uma issue.
