
# Project Clients and Sales

## Descrição

Este projeto Bacbk-end é uma API RESTful desenvolvida com AdonisJS e Lucid ORM . A API permite o cadastro de usuários externos que, ao realizarem login, podem 
registrar clientes, produtos e vendas. As operações são realizadas em um banco de dados MySQL.

## Tecnologias Utilizadas 
Adonis.js(Node.js) versão "^6.2.2"
MySQL
Lucid versão "^20.1.0" - ORM  para auxiliar na administração do banco de dados
JWT(JSON Web Token) - autenticação

## Como Instalar e Rodar o Projeto

1. Clone o repositório do projeto do GitHub:
    ```bash
    git clone git clone https://github.com/DAYANE1130/project--clients-and-sales.git
    ```
2. Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd backend-bemobile
    npm install
    ```
3. Configure o arquivo .env com as informações do banco de dados MySQL:
    ```
    DB_CONNECTION=mysql
    DB_HOST=seu-host
    DB_PORT=sua-porta
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    DB_DATABASE=nome-do-banco
    ```
4. Execute as migrações para criar a estrutura do banco de dados:
    ```bash
    node ace migration:run
    ```
5. Inicie o servidor:
    ```bash
    node ace serve --watch
    ```
Agora o projeto está rodando e pronto para ser acessado em `http://localhost:3333`.


## Rotas

### Usuários

- POST `/signup`: Cadastro de usuário do sistema.
- POST `/login`: Login com JWT de usuário cadastrado.

### Clientes

- GET `/customers`: Listar todos os clientes cadastrados.
- GET `/customers/:id`: Detalhar um cliente e vendas a ele.
- POST `/customers`: Adicionar um cliente.
- PUT `/customers/:id`: Editar um cliente.
- DELETE `/customers/:id`: Excluir um cliente e vendas a ele.

### Produtos

- GET `/products`: Listar todos os produtos cadastrados.
- GET `/products/:id`: Detalhar um produto.
- POST `/products`: Criar um produto.
- PUT `/products/:id`: Editar um produto.
- DELETE `/products/:id`: Exclusão lógica de um produto.

### Vendas

- POST `/sales`: Registrar venda de 1 produto a 1 cliente.

## Testes

Aqui você deve descrever como executar os testes.

## Documentação

Aqui você deve inserir o link para a documentação da API no Postman.
