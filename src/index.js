  'use strict';


const CHAPEL_PORT = process.env.CHAPEL_PORT;
const CHAPEL_HOST = process.env.CHAPEL_HOST;
const CHAPEL_DB = process.env.CHAPEL_DB;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(CHAPEL_DB);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const server = require('./app');


server.listen( CHAPEL_PORT, CHAPEL_HOST , () => { 
  console.log(`App listening on host ${ CHAPEL_HOST} & port ${ CHAPEL_PORT}!`);
});
