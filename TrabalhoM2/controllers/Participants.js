'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

/**
 * GET /participants
 * Retrieve all participants
 */
module.exports.participantsGET = function participantsGET(req, res, next) {
  db.query('SELECT * FROM participants', function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

/**
 * POST /participants
 * Create a new participant
 */
module.exports.participantsPOST = function participantsPOST(req, res, next, body) {
  const { name, email, status, ticketId } = body;

  // Validate required fields
  if (!name || !email || !status || ticketId === undefined) {
    return utils.writeJson(res, { message: "Invalid request data" }, 400);
  }

  db.query(
    'INSERT INTO participants (name, email, status, ticketId) VALUES (?, ?, ?, ?)',
    [name, email, status, ticketId],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else {
        utils.writeJson(res, { id: result.insertId, ...body }, 201);
      }
    });
};
