'use strict';


/**
 * Retrieve a list of participants
 *
 * returns List
 **/
exports.participantsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
}, {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new participant
 *
 * body Participant 
 * returns Participant
 **/
exports.participantsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a participant's details
 *
 * body Participant 
 * participanteId Long ID of the participant to update
 * returns Participant
 **/
exports.participantsParticipanteIdPUT = function(body,participanteId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve participants for a specific ticket
 *
 * ingressoId Long ID of the ticket to retrieve participants for
 * returns List
 **/
exports.participantsTicketIngressoIdGET = function(ingressoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
}, {
  "nome" : "nome",
  "participanteId" : 0,
  "email" : "email",
  "status" : "confirmado",
  "ingressoId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

