'use strict';

var utils = require('../utils/writer.js');
var db = require('../utils/db.js');

module.exports.eventsEventIdGET = function eventsEventIdGET(req, res, next, eventId) {
  // Query SQL para buscar o evento por ID
  const query = 'SELECT * FROM events WHERE eventId = ?';

  db.query(query, [eventId], function (err, result) {
    if (err) {
      // Resposta para erros internos no servidor
      utils.writeJson(res, { error: 'Internal server error', details: err.message }, 500);
    } else if (result.length === 0) {
      // Resposta para evento não encontrado
      utils.writeJson(res, { message: 'Event not found' }, 404);
    } else {
      // Resposta com o evento encontrado
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


module.exports.deleteEventById = function deleteEventById(req, res, next, eventId) {
  // Validar se o parâmetro eventId foi fornecido
  if (!eventId) {
    return utils.writeJson(res, { error: 'O ID do evento é obrigatório.' }, 400);
  }

  // Query para excluir o evento no banco de dados
  const query = 'DELETE FROM events WHERE eventId = ?';

  // Executar a query no banco de dados
  db.query(query, [eventId], function (err, result) {
    // Verificar se ocorreu algum erro no banco de dados
    if (err) {
      console.error("Erro ao excluir evento:", err); // Log para depuração
      return utils.writeJson(res, { error: 'Erro interno do servidor.' }, 500);
    }

    // Verificar se o evento foi encontrado e excluído
    if (result.affectedRows === 0) {
      return utils.writeJson(res, { message: 'Evento não encontrado.' }, 404);
    }

    // Resposta de sucesso
    return utils.writeJson(res, { message: 'Evento excluído com sucesso.' }, 200);
  });
};


module.exports.updateEventById = function updateEventById(req, res, next, body, eventId) {
  // Extrair dados do corpo da requisição
  const { title, description, date, time, location, organizerId } = body;

  // Validar se todos os campos obrigatórios estão presentes
  if (!title || !description || !date || !time || !location || !organizerId) {
    return utils.writeJson(res, { error: 'Todos os campos obrigatórios devem ser preenchidos.' }, 400);
  }

  // Query para atualizar o evento no banco de dados
  const query = `
    UPDATE events 
    SET title = ?, description = ?, date = ?, time = ?, location = ?, organizerId = ? 
    WHERE eventId = ?
  `;

  // Executar a query no banco de dados
  db.query(
    query,
    [title, description, date, time, location, organizerId, eventId],
    function (err, result) {
      // Verificar se ocorreu algum erro no banco de dados
      if (err) {
        console.error("Erro ao atualizar evento:", err); // Log para depuração
        return utils.writeJson(res, { error: 'Erro interno do servidor.' }, 500);
      }

      // Verificar se o evento foi encontrado e atualizado
      if (result.affectedRows === 0) {
        return utils.writeJson(res, { message: 'Evento não encontrado.' }, 404);
      }

      // Resposta de sucesso
      return utils.writeJson(res, {
        message: 'Evento atualizado com sucesso.',
        event: {
          eventId,
          title,
          description,
          date,
          time,
          location,
          organizerId
        }
      }, 200);
    }
  );
};
