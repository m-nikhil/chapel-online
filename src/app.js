const express = require('express');
const app = express();

if(process.env.NODE_ENV == "production") {
  const servestatic = require('./controller/staticfilesController');
  app.use('/',servestatic);
}

const server = require('http').Server(app);
let io = require('socket.io')(server);
require('./controller/socketController')(io);

module.exports = server;
