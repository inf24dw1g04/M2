'use strict';

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Substitua pelo seu usuário do MySQL
  password: '12345678', // Substitua pela sua senha
  database: 'sistema_gestao_events' // Certifique-se de que este é o nome correto do banco de dados
});

connection.connect(function (err) {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;
