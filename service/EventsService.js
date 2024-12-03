'use strict';


/**
 * Delete an event
 *
 * eventoId Long ID of the event to delete
 * no response value expected for this operation
 **/
exports.eventsEventoIdDELETE = function(eventoId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific event
 *
 * eventoId Long ID of the event to retrieve
 * returns Event
 **/
exports.eventsEventoIdGET = function(eventoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventoId" : 0,
  "data" : "2000-01-23",
  "hora" : "hora",
  "titulo" : "titulo",
  "organizadorId" : 6,
  "local" : "local",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing event
 *
 * body Event 
 * eventoId Long ID of the event to update
 * returns Event
 **/
exports.eventsEventoIdPUT = function(body,eventoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventoId" : 0,
  "data" : "2000-01-23",
  "hora" : "hora",
  "titulo" : "titulo",
  "organizadorId" : 6,
  "local" : "local",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of events
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventoId" : 0,
  "data" : "2000-01-23",
  "hora" : "hora",
  "titulo" : "titulo",
  "organizadorId" : 6,
  "local" : "local",
  "descricao" : "descricao"
}, {
  "eventoId" : 0,
  "data" : "2000-01-23",
  "hora" : "hora",
  "titulo" : "titulo",
  "organizadorId" : 6,
  "local" : "local",
  "descricao" : "descricao"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new event
 *
 * body Event 
 * returns Event
 **/
exports.eventsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventoId" : 0,
  "data" : "2000-01-23",
  "hora" : "hora",
  "titulo" : "titulo",
  "organizadorId" : 6,
  "local" : "local",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

