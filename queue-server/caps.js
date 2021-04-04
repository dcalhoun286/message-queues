'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;

console.log(PORT);

const uuid = require('uuid').v4;
const io = require('socket.io')(PORT);

//remove messages from the list in the order they are received
const queue = [];

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} has joined the server`);
});
