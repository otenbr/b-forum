# B-Fórum

Projeto de backend para um solução para interação entre usuários através da postagem de perguntas e respostas.

Link para documentação da API: https://documenter.getpostman.com/view/5378907/SzfCTRCK

## Começando

### Pré-requisitos

- Node.js
- MongoDb
- Yarn (_optional_)

### Instalando

Clone o repositório para máquina local.

```sh
git clone https://github.com/otenbr/b-forum.git
```

Altere para o diretório do projeto de backend

```sh
$ cd b-forum/backend
```

Execute o comando `npm` ou `yarn` para instalar as dependências de pacotes.

```sh
$ yarn
```

### Executando

Copiar o arquivo _.env.example_ e renomear para _.env_.

```sh
$ cp .env.example .env
```

Editar os valores das propriedades do arquivo

- PORT: número da porta que o backend irá rodar
- MONGODB_URL: endereço de conexão para o banco dados do Mongo DB

Execute o comando `npm run dev` ou `yarn dev`.

```sh
$ yarn dev
```

O site ficará disponível no endereço: http://localhost:[PORT]

### Testando

Para executar os testes unitários, execute o comando `npm run test` ou `yarn test`.

```sh
$ yarn test
```

## Créditos

Tecnologias e pacotes utilizados no projeto:

- [Node.js](https://nodejs.org/)
- [express](https://expressjs.com/)
- [cors](https://github.com/expressjs/cors)
- [nodemon](https://nodemon.io/)
- [jest](https://jestjs.io/)
- [sinon](https://sinonjs.org/)
- [supertest](https://github.com/visionmedia/supertest)

## Licença

[MIT](LICENSE.md)
