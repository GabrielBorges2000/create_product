Para criar uma nova migration execute o seguint e comando:

npx knex migrate:make <my-migration-name>


Após definir as tabelas do banco execute o seguinte comando para criar a tabela com base na migration criada:

npx knex -- migrate:latest

Casso seja necessário ajustar uma migration antes de ir para produção pare o servidor e execute o seguinte comando:

npx knex -- migrate:rollback