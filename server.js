"use strict";
exports.__esModule = true;
var http = require("http");
var path = require("path");
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var fs_1 = require("fs");
var app = express();
const data = JSON.parse((0, fs_1.readFileSync)(path.join(process.cwd(), 'data1.json'), 'utf8'));
app.use(cors());
app.use(bodyParser.json());
var todos = express();
todos.get('/', function (_, res) {
    res.json(data);
});
todos.put('/', function (req, res) {
    data.push(req.body.todo)
    fs_1.writeFileSync('data1.json', JSON.stringify(data));
    res.json(200);

});
todos.delete('/:index', (req, res) => {
    data.splice(req.params.index, 1);
    fs_1.writeFileSync('data1.json', JSON.stringify(data));
    res.json(200)
})

app.use('/api/todos', todos);
var httpServer = http.createServer(app);
var host = '0.0.0.0';
var port = 8888;
httpServer.listen({ host: host, port: port }, function () { return console.log("Listening on ".concat(host, ":").concat(port)); });
