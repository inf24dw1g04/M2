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

module.exports.participantsTicketTicketIdGET = function participantsTicketTicketIdGET(req, res, next, ticketId) {
  db.query('SELECT * FROM participants WHERE ticketId = ?', [ticketId], function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

