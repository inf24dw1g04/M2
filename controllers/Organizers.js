'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

module.exports.organizersGET = function organizersGET(req, res, next) {
  db.query('SELECT * FROM organizers', function (err, result) {
    if (err) {
      utils.writeJson(res, { error: err.message }, 500);
    } else {
      utils.writeJson(res, result, 200);
    }
  });
};

module.exports.organizersPOST = function organizersPOST(req, res, next, body) {
  const { nome, email, telefone } = body;
  db.query('INSERT INTO organizers (nome, email, telefone) VALUES (?, ?, ?)',
    [nome, email, telefone],
    function (err, result) {
      if (err) {
        utils.writeJson(res, { error: err.message }, 500);
      } else {
        utils.writeJson(res, { id: result.insertId, ...body }, 201);
      }
    });
};