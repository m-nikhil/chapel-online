'use strict';

//set env
process.env.NODE_ENV = 'development';

const env_path = "./config/env.development"
require('dotenv').config({path: env_path});

process.env.CHAPEL_HOST  = process.env.CHAPEL_HOST || '0.0.0.0';
process.env.CHAPEL_PORT = process.env.CHAPEL_PORT || 9000;
process.env.CHAPEL_DB = process.env.CHAPEL_DB||'mongodb://localhost/chapel_test';

const shell = require('shelljs');
const getNextPort = require('get-next-port');

getNextPort()
  .then(port => {
    shell.exec(`yarn nodemon`);
    console.log(port);
  })
  .catch( err => {
    console.log(err);
    process.exit(1);
  });
