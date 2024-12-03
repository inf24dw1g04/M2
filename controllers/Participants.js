'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

module.exports.participantsGET = function participantsGET(req, res, next) {
  db.query('SELECT * FROM participants', function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

module.exports.participantsPOST = function participantsPOST(req, res, next, body) {
  const { name, email, status, ticketId } = body;
  db.query('INSERT INTO participants (name, email, status, ticketId) VALUES (?, ?, ?, ?)',
    [name, email, status, ticketId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else {
        utils.writeJson(res, { id: result.insertId, ...body }, 201);
      }
    });
};

module.exports.participantsParticipanteIdPUT = function participantsParticipanteIdPUT(req, res, next, body, participantsId) {
  const { name, email, status, ticketId } = body;
  db.query('UPDATE participants SET name = ?, email = ?, status = ?, ticketId = ? WHERE participantsId = ?',
    [name, email, status, ticketId, participantsId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else if (result.affectedRows === 0) {
        utils.writeJson(res, { message: 'Participante não encontrado' }, 404);
      } else {
        utils.writeJson(res, { message: 'Participante atualizado com sucesso', ...body }, 200);
      }
    });
};

module.exports.participantsTicketTicketIdGET = function participantsTicketTicketIdGET(req, res, next, ticketId) {
  db.query('SELECT * FROM participants WHERE ticketId = ?', [ticketId])
    .then(result => {
      if (result.length === 0) {
        return utils.writeJson(res, { message: 'No participants found for the given ticket' }, 404);
      }
      utils.writeJson(res, result, 200);
    })
    .catch(err => utils.writeJson(res, { error: err.message }, 500));
};

