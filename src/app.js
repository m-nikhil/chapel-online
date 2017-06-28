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

const CHAPEL_SECRET_KEY = process.env.CHAPEL_SECRET_KEY;

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require("redis");
let client = redis.createClient();

let sessionMiddleware = session({
    name: 'chapel-online',
    secret: CHAPEL_SECRET_KEY,

    store: new RedisStore({
      host: 'localhost',
      port: 6379,
      client: client
      //ttl: 120      //server sessions expire time - 2min
    }),

    resave: true,
    saveUninitialized: true
    // not persistent cookies
    // cookie.secure reqiures https-enabled.
});



const server = require('http').Server(app);
let io = require('socket.io')(server);

let iosessionMiddleware = require("express-socket.io-session")

app.use(sessionMiddleware);
io.use(iosessionMiddleware(sessionMiddleware));

require('./controller/socketController')(io);


module.exports = server;
