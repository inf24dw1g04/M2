'use strict';


/**
 * Retrieve a list of organizers
 *
 * returns List
 **/
exports.organizersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telefone" : "telefone",
  "organizadorId" : 0,
  "nome" : "nome",
  "email" : "email"
}, {
  "telefone" : "telefone",
  "organizadorId" : 0,
  "nome" : "nome",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new organizer
 *
 * body Organizer 
 * returns Organizer
 **/
exports.organizersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "telefone",
  "organizadorId" : 0,
  "nome" : "nome",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

