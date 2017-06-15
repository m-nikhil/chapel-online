'use strict';

//set env
process.env.NODE_ENV = 'production';

const env_path = "./config/.env.production"
require('dotenv').config({path: env_path});

if( process.env.CHAPEL_HOST === undefined || process.env.CHAPEL_PORT === undefined)
{
  console.log("Error: missing host and port environment variables");
  console.log("Run 'yarn run config' & edit config files");
  process.exit(1);
}

const shell = require('shelljs');
shell.exec('node ./src/index.js')
