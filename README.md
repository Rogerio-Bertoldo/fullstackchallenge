# Desafio técnico Dev Full Stack

Este teste visa avaliar os conhecimentos e habilidades na nossa stack de tecnologias necessários para aplicação a oportunidade de desenvolvedor full stack aqui na [Sofit](https://sofit4.com.br).

## Objetivo do teste

O teste consiste em desenvolver uma pequena aplicação para um CRUD de veículos que deve conter pelo menos os seguintes itens:
- Listar veículos,
- Inserir um veículo,
- Visualizar um veículo,
- Editar um veículo, 
- Excluir um veículo.

Fique a vontade para construir a interface da forma que achar melhor, este será um dos pontos avaliados. 

Sugestão mínima de campos para cadastro: Placa, Marca, Modelo, Versão e Ano. Mas fique a vontade para adicionar o que achar pertinente.

As APIs também podem ser construídas utilizando o Design Pattern de seu interesse.

## Requisitos

Já deixamos o projeto iniciado com uma stack definida, basta fazer o fork do repositório e dar continuidade:
Front: [EmberJS](https://emberjs.com/)\
Back: [NodeJS + Express](https://expressjs.com/pt-br/)\
Banco: [MongoDB](https://www.mongodb.com/) ou [PostgreSQL](https://www.postgresql.org/). Utilize uma imagem do Docker de acordo com o banco escolhido:
- [Imagem Postgres](https://hub.docker.com/_/postgres)
- [Imagem Mongo](https://hub.docker.com/_/mongo)

Para listar marcas e modelos e carregar as opções em tela, você deve utilizar uma API pública que retorne as informações, encontramos [Esta aqui](https://deividfortuna.github.io/fipe/), mas se quiser utilizar outra, a vontade. O importante é avaliarmos como você realiza as requisições a APIs externas.

## Conclusão do desafio

Após realizar o desafio, enviar ao Github e nos enviar o link no e-mail dev.jobs@sofit4.com.br.

## O que vamos avaliar?

- Estruturação e organização do código,
- Funcionalidade da aplicação,
- Interface final da aplicação,
- Design Patterns,
- Itens adicionais não solicitados.

## Bonus
- Criação de testes automatizados (Backend).


## Passos para executar o projeto

Primeiro é necessário subir o container do postgres. Em um terminal, vá para a pasta backend e execute o comando: `docker-compose up -d`

Antes de "rodar" o projeto pela primeira vez, é necessário executar as migrations, a fim de que a estrutura do banco de dados seja criada. Ainda na pasta backend, digite o comando a seguir no terminal: `npx knex migrate:latest --env development`

Após realizar de maneira bem sucedida os passos anteriores, digite em um terminal (na pasta backend): `npm start`. Com isto, o backend será executado e estará "escutando" requisições. Os endpoints criados são:

- POST /vehicle
    - Descrição: Cria um novo veículo
    - Corpo requisição:
    `{
        "licensePlate": "RCN-767",
        "brand": "Waymo",
        "model": "Z1",
        "version": "3.1",
        "year": "2022"
    }`

- PUT /vehicle/:licensePlate
    - Descrição: Atualiza as informações do veículo associado à placa fornecida como parâmetro (pode-se atualizar inclusive a placa do veículo)
    - Corpo requisição:
    `{
        "licensePlate": "RCN-767",
        "brand": "Waymo",
        "model": "Z1",
        "version": "3.1",
        "year": "2022"
    }`

- GET /vehicle/:licensePlate
    - Descrição: Obtém as informações do veículo associado à placa fornecida como parâmetro
    - Corpo requisição: Não há

- GET /vehicles
    - Descrição: Obtém as informações de todos os veículos já cadastrados
    - Corpo requisição: Não há

- GET /health
    - Descrição: Verifica estado da aplicação
    - Corpo requisição: Não há


Para executar o frontend, na pasta frontend digite o seguinte comando no terminal: `ember server`. Após isso, abra a url a seguir em um navegador: `http://localhost:4200/vehicles`

