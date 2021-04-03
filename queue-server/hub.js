'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const io = require('socket.io')(PORT);

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} has joined the server`);
});
