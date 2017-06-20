'use strict';

const server = require('./app');

const CHAPEL_PORT = process.env.CHAPEL_PORT;
const CHAPEL_HOST = process.env.CHAPEL_HOST;


server.listen( CHAPEL_PORT, CHAPEL_HOST , () => {
  console.log(`App listening on host ${ CHAPEL_HOST} & port ${ CHAPEL_PORT}!`);
});
