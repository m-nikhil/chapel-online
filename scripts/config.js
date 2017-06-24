'use strict';

const fs = require('fs');

fs.stat('./config/env.development', function(err, stat) {
    if(err == null) {
        console.log("The file env.development already exists");
    } else if(err.code == 'ENOENT') {
        // file does not exist
        fs.createReadStream('./config/env.sample')
          .pipe(fs.createWriteStream('./config/env.development'));
    } else {
        console.log('Some other error: ', err.code);
    }
});

fs.stat('./config/env.production', function(err, stat) {
    if(err == null) {
        console.log("The file env.production already exists");
    } else if(err.code == 'ENOENT') {
        // file does not exist
        fs.createReadStream('./config/env.sample')
          .pipe(fs.createWriteStream('./config/env.production'));
    } else {
        console.log('Some other error: ', err.code);
    }
});

console.log("Successfully created the config files");
