"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var categoryControllers = require("./controllers/categories");
var CORS_1 = require("./middlewares/CORS");
var authenticate_1 = require("./middlewares/authenticate");
var users_1 = require("./controllers/users");
var io = require("socket.io");
var app = express();
var port = 3000;
app.use(express.static('public_html'));
// enable CORS through a middleware
app.use(CORS_1.enableCors);
// enable parsing of request payload into JSON object
app.use(bodyParser.json());
var categoryRoutePrefix = '/api/categories/';
app.get(categoryRoutePrefix, categoryControllers.getAll);
app.get(categoryRoutePrefix + ":cat_id", categoryControllers.getCategoryById);
app.get(categoryRoutePrefix + ":cat_id/picture", categoryControllers.getCategoryPicture);
// authenticate middleware applied:
app.post(categoryRoutePrefix, authenticate_1["default"], categoryControllers.addNewCategory);
app["delete"](categoryRoutePrefix + ":cat_id", authenticate_1["default"], categoryControllers.deleteCategory);
app.post('/api/login', users_1.login);
app.listen(port, function () { return console.log("Server started at port " + port); });
console.log('Please wait till server starts :)');
var server = require('http').Server();
server.listen(3300);
// websocket configuration
var socket = io(server);
var messages = [{ name: 'Admin', message: 'Welcome to messenger...' }];
socket.on('connection', function (client) {
    client.emit('messages', { messages: messages });
    // Array.unishft() inserts at index 0
    client.on('new_message', function (data) {
        messages.push(data);
        // sends the message to the same client (self)
        // client.emit('messages', { messages }); 
        // broadcast message to all
        socket.emit('messages', { messages: messages });
    });
    client.on('disconnect', function () {
        console.log('a client disconnected');
    });
});
