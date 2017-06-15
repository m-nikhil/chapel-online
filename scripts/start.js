'use strict';

//set env
process.env.NODE_ENV = 'development';

const env_path = "./config/.env.development"
require('dotenv').config({path: env_path});

const CHAPEL_HOST = process.env.CHAPEL_HOST || '0.0.0.0';
const  CHAPEL_PORT = process.env.CHAPEL_PORT || 9000;

const shell = require('shelljs');
const getNextPort = require('get-next-port');

getNextPort( CHAPEL_PORT)
  .then(port => {
    shell.exec(`export  CHAPEL_PORT=${port} && yarn nodemon`);
    console.log(port);
  })
  .catch( err => {
    console.log(err);
    process.exit(1);
  });
