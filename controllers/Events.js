'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

module.exports.eventsEventoIdGET = function eventsEventoIdGET(req, res, next, eventId) {
  db.query('SELECT * FROM events WHERE eventId = ?', [eventId], function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else if (result.length === 0) {
      utils.writeJson(res, { message: 'Evento não encontrado' }, 404);
    } else {
      utils.writeJson(res, result[0], 200);
    }
  });
};

module.exports.eventsGET = function eventsGET(req, res, next) {
  db.query('SELECT * FROM events', function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

module.exports.eventsPOST = function eventsPOST(req, res, next, body) {
  const { title, description, date, time, location, organizerId } = body;
  db.query('INSERT INTO events (title, description, date, time, location, organizerId) VALUES (?, ?, ?, ?, ?, ?)',
    [title, description, date, time, location, organizerId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else {
        utils.writeJson(res, { id: result.insertId, ...body }, 201);
      }
    });
};

module.exports.eventsEventoIdDELETE = function eventsEventoIdDELETE(req, res, next, eventId) {
  db.query('DELETE FROM events WHERE eventId = ?', [eventId], function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else if (result.affectedRows === 0) {
      utils.writeJson(res, { message: 'Evento não encontrado' }, 404);
    } else {
      utils.writeJson(res, { message: 'Evento excluído com sucesso' }, 200);
    }
  });
};

module.exports.eventseventIdPUT = function eventsEventoIdPUT(req, res, next, body, eventId) {
  const { title, description, date, time, location, organizerId } = body;
  db.query('UPDATE events SET title = ?, description = ?, date = ?, time = ?, location = ?, organizerId = ? WHERE eventId = ?',
    [title, description, date, time, location, organizerId, eventId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else if (result.affectedRows === 0) {
        utils.writeJson(res, { message: 'Evento não encontrado' }, 404);
      } else {
        utils.writeJson(res, { message: 'Evento atualizado com sucesso', ...body }, 200);
      }
    });
};
