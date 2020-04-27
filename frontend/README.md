# B-Fórum

Projeto de frontend para um solução para interação entre usuários através da postagem de perguntas e respostas.

Nesta versão, o sistema ainda não conta com autenticação para o usuário. Será gerado um nome de usuário aleatório para ser utilizado nos registros de novas perguntas e respostas.
O usuário pode realizar a inclusão de novas perguntas, visualizar a lista de perguntas, entrar em uma pergunta e ter acesso as respostas, incluir novas respostas, avaliar as perguntas e respostas utilizando ícones ("like" / "dislike").

## Futuras implementações

- [ ] Revisão de layout
- [ ] Testes unitários
- [ ] Busca por texto
- [ ] Filtrar por perguntas respondidas
- [ ] Filtrar por usuário
- [ ] Ordenação da lista
- [ ] Autenticação de usuário

## Começando

### Pré-requisitos

- Node.js
- Yarn (_optional_)

### Instalando

Clone o repositório para máquina local.

```sh
git clone https://github.com/otenbr/b-forum.git
```

Altere para o diretório do projeto de backend

```sh
$ cd b-forum/frontend
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

- PORT: número da porta que o frontend irá rodar
- REACT_APP_API_URL: endereço de conexão para a api do backend

Execute o comando `npm run start` or `yarn start`.

```sh
$ yarn start
```

O site ficará disponível no endereço: http://localhost:[PORT]

## Créditos

Tecnologias e pacotes utilizados no projeto:

- [Node.js](https://nodejs.org/)
- [reactjs](reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [axios](https://github.com/axios/axios)
- [date-fns](https://date-fns.org/)

## Licença

[MIT](LICENSE.md)
