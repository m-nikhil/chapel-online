const express = require('express');
const app = express();

if(process.env.NODE_ENV == "production") {
  const servestatic = require('./controller/staticfilesController');
  app.use('/',servestatic);
}

if (process.env.NODE_ENV == 'development') {
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
}


const permalink = require('./controller/permalinkController');
app.use('/',permalink);

const server = require('http').Server(app);
let io = require('socket.io')(server);
require('./controller/socketController')(io);



module.exports = server;
