const express = require('express');
const app = express();

if(process.env.NODE_ENV == "production") {
  const servestatic = require('./controller/staticfilesController');
  app.use('/',servestatic);
}



/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/





app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });


app.get('*/*', function (req, res) {
  res.send("hey!");
});
const server = require('http').Server(app);
let io = require('socket.io').listen(server);

//io.set('origins', 'http://localhost:3002');

io.on ("connection", function(socket){
           socket.emit('news', { hello: 'world' });
        socket.on("run", function (data){
		    console.log("yeah! socket works");
	});
});

module.exports = app;
