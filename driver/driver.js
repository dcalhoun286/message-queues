'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;
const url = `${process.env.url}${PORT}`;
const host = `${url}${PORT}`;

console.log(PORT);

const client = require('socket.io-client');

const socket = client.connect(`${host}/driver`);

socket.emit('test', () => {
  setInterval(() => {
    console.log('proof of life?');
  }, 2000);
})