
# Project Clients and Sales

## Descrição

Este projeto é uma API RESTful desenvolvida com AdonisJS e Lucid ORM . A API permite o cadastro de usuários externos que, ao realizarem login, podem 
registrar clientes, produtos e vendas. As operações são realizadas em um banco de dados MySQL.

## Instalação

Primeiro, você precisará clonar o repositório:

```bash
git clone https://github.com/DAYANE1130/project--clients-and-sales.git

Depois, navegue até o diretório do projeto:

cd yourproject
Em seguida, instale as dependências:

npm install
Configuração
Descreva quaisquer passos de configuração necessários aqui, como a configuração do banco de dados.

Uso
Inicie o servidor:

npm start
Agora você pode acessar o servidor em http://localhost:3000.

Rotas
Usuários
POST /signup: Cadastro de usuário do sistema.
POST /login: Login com JWT de usuário cadastrado.
Clientes
GET /customers: Listar todos os clientes cadastrados.
GET /customers/:id: Detalhar um cliente e vendas a ele.
POST /customers: Adicionar um cliente.
PUT /customers/:id: Editar um cliente.
DELETE /customers/:id: Excluir um cliente e vendas a ele.
Produtos
GET /products: Listar todos os produtos cadastrados.
GET /products/:id: Detalhar um produto.
POST /products: Criar um produto.
PUT /products/:id: Editar um produto.
DELETE /products/:id: Exclusão lógica de um produto.
Vendas
POST /sales: Registrar venda de 1 produto a 1 cliente.
Testes
Descreva como executar os testes aqui.

Documentação
Link para a documentação da API no Postman.

Contribuição
Informações sobre como contribuir para o projeto.

Licença
Informações de licença.

