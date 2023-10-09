# Lets Go Byecar API Documentation

## 🚀 API Endpoints

### POST `/login`

Autentica o usuário e gera um token de autorização.

#### Body Parameters:

- `email` (string): E-mail do usuário. Por exemplo: `email@example.com`.
- `password` (string): Senha do usuário. Por exemplo: `example.password`.

#### Responses:

- **200 OK**:
  
  ```json
  {
    "token": "generated-authentication-token"
  }

- **400 OK**:
  
  ```json
  {
    "error": "Invalid email or password"
  }

### GET `/users`

Obtém informações detalhadas do usuário, usando um token de autorização.

#### Headers:

- `Authorization`: Deve conter o token obtido após a autenticação. Por exemplo: Bearer `generated-authentication-token`.

#### Query Parameters::

- `token` (string):  O token de autorização. Por exemplo: `generated-authentication-token`.

#### Responses:

- **200 OK**:
  
  ```json
  {
    "name": "User's Name",
    "email": "User's Email",
    "cellphone": "User's Cellphone"
  }

- **400 OK**:
  
  ```json
  {
    "error": "Unauthorized"
  }

  - **500 OK**:
  
  ```json
  {
    "error": "Invalid token"
  }

  - **500 OK**:
  
  ```json
  {
    "error": "Failed to fetch user data from API."
  }

  - **500 OK**:
  
  ```json
  {
    "error": "Internal server error"
  }


## 🏗 Arquitetura

- `Client`: O cliente consiste em 4 páginas principais que interagem com o lado server-side. A autenticação é realizada automaticamente na primeira página, solicitando um token de autorização. A comunicação é uma simulação com uma API terceira.

- `Server`: O servidor foi construído seguindo a arquitetura em camadas, dividindo responsabilidades entre domínio, aplicação e infraestrutura:
  * `application/usecase`: Lida com casos de uso específicos da aplicação.
  * `domain/entities`: Define as principais entidades ou objetos de negócios.
  * `infrastructure`: Lida com detalhes de implementação, incluindo controle de rotas, serviços e interações HTTP.