/* eslint-disable no-unused-vars */

const genUrl = (url) => `http://localhost:8888/api${url}`

function get(url) {
  return fetch(genUrl(url), {credentials: 'same-origin', method: 'GET', headers: {'Content-Type': 'application/json'}});
}

function put(url, data) {
  return fetch(genUrl(url), {credentials: 'same-origin', method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
}

function del(url, data) {
  return fetch(genUrl(url), {credentials: 'same-origin', method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data ?? {})});
}

async function loadTodos() {
  return get('/todos').then((res) => res.json());
}

export default {
  loadTodos
}
