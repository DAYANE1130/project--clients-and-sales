
# Project Clients and Sales

## Descrição

Este projeto Bacbk-end é uma API RESTful desenvolvida com AdonisJS e Lucid ORM . A API permite o cadastro de usuários externos que, ao realizarem login, podem 
registrar clientes, produtos e vendas. As operações são realizadas em um banco de dados MySQL.

## Tecnologias Utilizadas 
* Adonis.js(Node.js) versão "^6.2.2"
* MySQL
* Lucid versão "^20.1.0" - ORM  para auxiliar na administração do banco de dados
* JWT(JSON Web Token) - autenticação

## Informações relevantes  prévias à instalação

* Você precisa  garantir que possui Node.js e npm instalados em seu computador. AdonisJS precisa do Node.js >= 20.6.

* Você pode instalar o Node.js usando os instaladores oficiais ou Volta . Volta é um gerenciador de pacotes multiplataforma que instala e executa várias versões do Node.js em seu computador.

* Verifique a versão do Node.js.Copie o código para a área de transferência , basta inserir esse comando no seu terminal e apertar a tecla enter, a saída será similar a do exemplo abaixo (//v21.0.0), indicando qual a versão atual do node caso ele exista.

    ```bash
      node -v
      //v21.0.0
    ```

## Como Instalar e Rodar o Projeto

1. Clone o repositório do projeto do GitHub:
    ```bash
    git clone git clone https://github.com/DAYANE1130/project--clients-and-sales.git
    ```
2. Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd project-clients-and-sales
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
Aqui está um exemplo de como configurar as variavéis de ambiente:     

    ```
    PORT=3333
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    DB_DATABASE=customer_and_sales
    
    ```
    
5. Execute as migrações para criar a estrutura do banco de dados:
   
    ```bash
    node ace migration:run
    ```
7. Inicie o servidor:
   
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
