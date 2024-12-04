'use strict';


/**
 * Retrieve tickets for a specific event
 *
 * eventoId Long ID of the event to retrieve tickets for
 * returns List
 **/
exports.ticketsEventEventoIdGET = function(eventoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preco" : 6.0274563,
  "tipo" : "normal",
  "eventoId" : 1,
  "ingressoId" : 0
}, {
  "preco" : 6.0274563,
  "tipo" : "normal",
  "eventoId" : 1,
  "ingressoId" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of tickets
 *
 * returns List
 **/
exports.ticketsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preco" : 6.0274563,
  "tipo" : "normal",
  "eventoId" : 1,
  "ingressoId" : 0
}, {
  "preco" : 6.0274563,
  "tipo" : "normal",
  "eventoId" : 1,
  "ingressoId" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new ticket
 *
 * body Ticket 
 * returns Ticket
 **/
exports.ticketsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "preco" : 6.0274563,
  "tipo" : "normal",
  "eventoId" : 1,
  "ingressoId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

