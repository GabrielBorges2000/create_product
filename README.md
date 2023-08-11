# Gerenciador de Pedidos
O Objetivo dessa aplicação é conseguir gerenciar um estoque de produtos de uma empresa. Não se aplica para projetos grandes pois é uma aplicação simples e local.

# 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:

Versão mais recente do ```Visual Studio Code```.
Versão mais recente do ```NODE.JS```.
Versão mais recente do ```MySQL```.
Ter um dispositivo dispositivo ```Desktop```,```Android```,```IOS```.

# Como inicar o servidor?

Baixe as dependências:
Windows:

```
npm install
```
No terminal execute:

```
npm start
```

No terminal coloque o comando:

```
npm run dev
```

Agora para acessar o servidor, em seu navegador abra o localhost ou acesso pelo IP da sua máquina:

exemplo:

```
http://localhost:3000/
```
ou 
```
http://yseu-ip-aqui:3000/
```

caso não saiba como conseguir o endereço ip da sua máquina, abra um terminal e rode o seguinte comando:

```
ipconfig
```

Pronto! Basta realizar as alterações nos arquivos se for necessário ou somente testar a aplicação.

Esse arquivo foi utilizado o bootstrap com uma configuração básica de css,express, node.js 18 LTS, EJS e jQuery.

## Segue Abaixo as configurações das tabelas mysql

Crie um banco com o nome ```product```.

Dentro do banco crie uma tabela com nome de ```product```.

Na tabela product defina as seguintes colunas:

```
id              char(36) PK 
productName     text 
value           decimal(10,2) 
stock           decimal(10,2) 
created_at      timestamp 
userId          varchar(255)

```

no arquivo en defina as variáveis necessárias para rodas sua aplicação

```
NODE_ENV=development
DATABASE_CLIENT='mysql'
DATABASE_USER='seu-usuário-do-mysql-aqui'
DATABASE_URL='localhost'
DATABASE_PASSWORD='sua-senha-do-mysql-aqui'
```
## Funcionalidades da Aplicação

- [x] O usuário deve conseguir um relatório dos produtos
- [x] O usuário deve conseguir adicionar um produto
- [x] O usuário deve conseguir editar um produto
- [x] O usuário deve conseguir remover um produto

##### Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GabrielBorges2000">
        <img src="https://avatars.githubusercontent.com/u/112534393?v=4" width="100px;" alt="Foto do Gabriel Borges no GitHub"/><br>
        <sub>
          <b>Gabriel Borges</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

Gostou desse projeto? Deixe um Like!
