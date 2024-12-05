var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }

  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    code = 200;
  }

  // Garantir que o payload seja serializável em JSON
  if (typeof payload === 'object' && payload !== null) {
    try {
      payload = JSON.stringify(payload, null, 2);
    } catch (error) {
      console.error("Erro ao serializar o payload:", error);
      payload = JSON.stringify({ error: "Erro ao processar a resposta" });
    }
  }
  else if (typeof payload !== 'string') {
    payload = String(payload || '');
  }

  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
