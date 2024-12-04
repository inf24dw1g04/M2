'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

module.exports.ticketsGET = function ticketsGET(req, res, next) {
  db.query('SELECT * FROM tickets', function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

module.exports.ticketsPOST = function ticketsPOST(req, res, next, body) {
  const { type_ticket, price, eventId } = body;
  db.query('INSERT INTO tickets (type_ticket, price, eventId) VALUES (?, ?, ?)',
    [type_ticket, price, eventId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else {
        utils.writeJson(res, { id: result.insertId, ...body }, 201);
      }
    });
};

module.exports.ticketsEventEventIdGET = function ticketsEventEventIdGET(req, res, next, eventId) {
  // Consulta SQL usando o estilo de callbacks
  const query = 'SELECT * FROM tickets WHERE eventId = ?';

  db.query(query, [eventId], function (err, result) {
    if (err) {
      // Caso ocorra um erro na consulta
      utils.writeJson(res, { error: 'Internal server error', details: err.message }, 500);
    } else if (result.length === 0) {
      // Caso nenhum ticket seja encontrado para o eventId fornecido
      utils.writeJson(res, { message: 'No tickets found for the given event ID' }, 404);
    } else {
      // Retorna os tickets encontrados
      utils.writeJson(res, result, 200);
    }
  });
};

