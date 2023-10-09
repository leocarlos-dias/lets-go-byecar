# 🚗 Lets Go Byecar

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

👤 **Leonardo Carlos Dias**

🌐 [Portfólio](https://leocarlos-dias.github.io/personal-portfolio/)  
🔗 [LinkedIn](https://www.linkedin.com/in/leonardocsdias/)

## 📖 Sobre

Bem-vindo ao **Lets Go Byecar**! Este projeto foi criado como um desafio para simular autenticação e recuperação de informações de usuários por meio de um token de uma API externa. Compreende uma interface client-side de 4 páginas e um backend server-side.

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- JWT (Json Web Token)
- Jest
- Git & GitHub

## 📁 Estrutura do Projeto

```
client
  │
  ├── public
  │
  ├── src
  │ └── components
  │ └── hooks
  | └── ...
  |
  └── ...



server
  └── src
    ├── application
    │ └── usecase
    │
    ├── domain
    │ └── entities
    │
    ├── infrastructure
    │ └── controllers
    │ └── http
    │ └── routes
    │ └── services
    |
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

## 🎯 Visão Geral

**Lets Go Byecar** proporciona uma experiência client-side interativa através de suas 4 páginas distintas, facilitando a navegação dos usuários via botões no cabeçalho. A dinâmica de comunicação com o server-side é uma simulação de interações típicas com uma API terceira.

### Client-Side:

- **Tema Dual**: O cliente vem com dois temas de cores: **escuro** e **claro**. A escolha do usuário para o tema persiste mesmo após atualizar a página, proporcionando uma experiência de usuário personalizada.
  
- **Página de Solicitação de Token**: Onde, ao ser acessada, o usuário é automaticamente autenticado e recebe um token de autorização.
  
- **Página 2 & Página 3**: Páginas intermediárias para navegação.
  
- **Página de Busca de Informações do Usuário**: Usando o token obtido, os usuários podem buscar informações detalhadas.

### Server-Side:

- **Endpoints**:
  - `/login`: Simula a obtenção automática de um token de autorização ao acessar a primeira página.
  - `/users`: Simula a recuperação de informações do usuário usando o token.

- **Credenciais para Login**:
  - Email: `email@example.com`
  - Senha: `example.password`

- **Autenticação**: No momento em que a primeira página é acessada, um token de autorização válido por 60 minutos é gerado automaticamente.

- **Recuperação de Informações**: Apresenta informações do usuário após verificar a validade do token fornecido.

## 🚀 Navegação Client-Side

Os usuários podem se deslocar confortavelmente entre quatro páginas principais, incluindo uma para solicitar um token e outra para buscar informações do usuário com o token obtido.

## 🔒 Autenticação via Token

A autenticação ocorre automaticamente ao acessar a primeira página, gerando um token de autorização que permite aos usuários acessar recursos específicos, como a busca de informações do usuário.

## 🔍 Busca de Informações do Usuário

Ao fornecer o token válido na quarta página, os usuários podem recuperar informações detalhadas do usuário. Esta consulta é tratada pelo server-side que, por sua vez, simula uma interação com uma API terceira.

## 💻 Instalação e Execução

### Para a pasta `client`

1. Clone o repositório.
2. Acesse o diretório `client`.
3. Instale as dependências com `npm install` ou `yarn install`.
4. Execute o projeto com `npm run dev` ou `yarn dev`.

### Para a pasta `server`

1. Acesse o diretório `server`.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Crie um arquivo `.env` baseando-se no arquivo `.env.example` e configure as variáveis de ambiente conforme indicado.
4. Execute o projeto com `npm run dev` ou `yarn dev`.

> **Nota**: O `client` será executado na porta `5173`, já o `server` será executado na porta `3001`.

## 🧪 Testes

Para executar os testes, vá para o diretório `server` e execute `npm run test` ou `yarn test`.

## 💌 Contato

Em caso de dúvidas ou feedbacks, entre em contato por [email](mailto:leocsdias@hotmail.com).

## 🤝 Contribuições

Todas as contribuições são bem-vindas! Se desejar melhorar o **Lets Go Byecar**, sinta-se à vontade para abrir um pull request ou uma issue.
