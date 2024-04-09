
# Project Clients and Sales

## Descrição

Este projeto Back-end é uma API RESTful desenvolvida com AdonisJS e Lucid ORM . A API permite o cadastro de usuários externos que, ao realizarem login, podem 
registrar clientes, produtos e vendas. As operações são realizadas em um banco de dados MySQL.

## Tecnologias Utilizadas 
* Adonis.js(Node.js) versão "^6.2.2".
* Linguagem utilizada: Typescript.
* MySQL - Banco de dados.
* Lucid versão "^20.1.0" - ORM  para auxiliar na administração do banco de dados.
* JWT(JSON Web Token) -  para autenticação e autorizar o acesso do usuário a rotas específicas.

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


# Autenticação

Para autenticar um usuário na API, você precisa fazer uma solicitação POST para a rota `/login` com o seguinte corpo:

```json
{
    "email": "rafael@gmail.com",
    "password": "abd_123"
}
```
Se a autenticação for bem-sucedida, a API retornará um token JWT no seguinte formato:

```
{
    "type": "bearer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc5LCJpYXQiOjE3MTI2MTQ1MTF9.SqXgJPZx-WSe0AFIppHOZNuOvbYZi6kNMiwHzn7rWmg"
}
```

### Autorização

* Para acessar as rotas protegidas da API (como as rotas de clientes, produtos e vendas), você precisará incluir o token JWT em suas solicitações. Aqui está como você pode fazer isso:

* Na sua ferramenta de testes de API (como o Postman), localize a seção para adicionar cabeçalhos à sua solicitação.
Adicione um novo cabeçalho com "Authorization" como a chave e "Bearer {token}" como o valor, onde {token} é o token que você recebeu da rota de login.

* Por exemplo, para acessar a rota POST /sales para criar uma venda, você precisará fazer uma solicitação POST com o seguinte corpo:

```
{
    "customer_id": 89,
    "product_id": 8,
    "quantity": 9,
    "unit_price": 99.50
}
```
E adicionar a seguinte cabeçalho à sua solicitação:

* No campo "Key" selecionar "Authorization" 
```
Authorization
```
* No campo "Value" colocar o token conforme abaixo:
  
  ```
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc5LCJpYXQiOjE3MTI6MTQ1MTF9.SqXgJPZx-WSe0AFIppHOZNuOvbYZi6kNMiwHzn7rWmg
  ``` 
* Lembre-se de substituir `{token}` pelo token real que você obteve do login.



# Rotas

### Usuários (Não exigem envio de token)

- POST `/users`: Cadastro de usuário do sistema. 
- POST `/login`: Login com JWT de usuário cadastrado.

### Clientes (Todas a rotas exigem envio de token)

- GET `/customers`: Listar todos os clientes cadastrados.
- GET `/customers/:id`: Detalhar um cliente e vendas a ele.
- Get `/customers/:id/sales/:month?/:year?` : Detalhar um cliente e vendas a ele por mês e ano.
- POST `/customers`: Adicionar um cliente.
- PATCH `/customers/:id`: Editar um cliente.
- DELETE `/customers/:id`: Excluir um cliente e vendas a ele.

### Produtos (Todas a rotas exigem envio de token)

- GET `/products`: Listar todos os produtos cadastrados.
- GET `/products/:id`: Detalhar um produto.
- POST `/products`: Criar um produto.
- PATCH `/products/:id`: Editar um produto.
- DELETE `/products/:id`: Exclusão lógica ("soft delete") de um produto.

### Vendas (Exige envio de token)

- POST `/sales`: Registrar venda de 1 produto a 1 cliente.



# Documentação

Documentação de API feita no Postman, fornece informações detalhadas sobre como utilizar essa API , acessá-la  através do link: 
```
https://documenter.getpostman.com/view/31041446/2sA35MzzVm
```


A documentação inclui :

* Detalhes sobre os endpoints disponíveis, os parâmetros necessários, os tipos de solicitações suportadas (como GET, POST, PUT,PATCH, DELETE).
* Exemplos de solicitações e respostas, autenticação necessária, entre outras informações relevantes.
* Essa documentação é útil para desenvolvedores que desejam integrar suas aplicações com a API, pois fornece orientações claras e exemplos práticos para facilitar o uso correto da API.


# Melhorias Futuras

- Adicionar autenticação por meio de redes sociais como Facebook e Google.
- Incluir uma seção de "Estrutura do Projeto" descrevendo a organização dos arquivos e pastas no projeto, seguindo boas práticas de arquitetura de software.
- Implementar testes de unidade e de integração para todas as rotas.
- Adicionar uma funcionalidade de pesquisa para facilitar a localização de clientes e produtos assim será possivel indentificar quais os produtos preferidos do cliente e futuramente  usar para fazer recomendações.
- Monitorar regularmente o desempenho do banco de dados, identificar quaisquer consultas ou operações lentas e então fazer ajustes para melhorar o desempenho.
