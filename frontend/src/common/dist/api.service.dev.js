"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiService = apiService;

var _csrf_token = require("./csrf_token.js");

function handleResponse(response) {
  if (response.status === 204) {
    return "";
  } else if (response.status === 404) {
    return null;
  } else {
    return response.json();
  }
}

function apiService(endpoint, method, data) {
  var config = {
    method: method || "GET",
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      "content-type": "application/json",
      "X-CSRFTOKEN": _csrf_token.CSRF_TOKEN
    }
  };
  return fetch(endpoint, config).then(handleResponse);
}