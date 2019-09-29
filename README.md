# iHero

Os requisitos do projeto e seus critérios de aceitação foram mantidos nesse kanban: https://trello.com/b/IcU4i13w/iheros

No processo de modelagem foi obtido o seguinte diagrama de classes: ![uml](https://yuml.me/pwener/ihero.png)

## Como executar solução?

Na pasta do app execute nessa sequência:

`docker-compose build`

`docker-compose run web rails db:reset`

`docker-compose up`

Agora na pasta do app, em outra terminal:

`yarn install`

`yarn start`

Por último, na pasta do listener, em outro terminal:

`yarn install`

`node app.js`

O admin inicial tem as credenciais adm@adm.com e senha: admin123

## Testes

Basicamente, por uma questão de tempo, apenas foi implementado testes na API, uma vez que considero a parte mais crítica da aplicação. Para executar os testes:

`docker-compose run web rspec`

A cobertura dos testes deve aparecer na saída do comando. 

## Considerações sobre a solução

- Cada vez que é alocado um heroi para combater a ameaça, é simulado uma batalha com tempo de 5 minutos.
- A vitória é ramdomizada, caso o heroi perca, um novo heroi é alocado para a ameaça.

## Arquitetura

O sistema contempla 3 modulos, a api, um app e um listener.

### API

Utiliza Ruby on Rails, sendo responsável por manter os dados e processar a lógica dos combates. Ela recebe dados do listener e do app, e é consumida apenas pelo app.

Na classe `app/controllers/batle_pool.rb` tem-se uma variação do pattern chamado Object pool, visando otimizar o processamento da listagem de batalhas atuais, uma vez que esses elementos são criados e requisitados em alta escala. Ainda nessa classe, é realizado o uso de _threads_ para fazer os processamento das batalhas.

### APP

Front-end utilizando o framework React.

### Listener

O socket a ser lido no problema utiliza a biblioteca para node e javascript chamada socket.io, que utiliza muitas camadas de implementação em cima de websockets, não permitindo uma comunicação convencional com outros sockets. Apesar de ser possível implementar o protocolo socket.io em outras linguagens, isso não é confiável e trivial. Portanto um script em node foi criado para se comunicar com o link(https://zrp-challenge-socket.herokuapp.com:80) do socket.io, publicando as ameaças vindas na api via http request.


### TODO

- Paginação das listas.
- Seleção de heroi com base na localização.
- Uso de múltiplos heróis para uma ameaça.
- Integrar todos módulos da solução em um docker-compose ou script...

Mais melhorias e evoluções nas issues do github.
