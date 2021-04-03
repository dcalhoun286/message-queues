'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;
const url = process.env.url;

const io = require('socket.io-client');

const host = `${url}${PORT}`;

const socket = io.connect(host);
