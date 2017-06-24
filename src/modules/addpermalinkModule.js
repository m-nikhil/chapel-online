
function addpermalink (code,input) { //add flags

const mongoose = require('mongoose');
const permalink = require('../models/permalinkModel');

const uuidv4 = require('uuid/v4');
let link = uuidv4();


let model = new permalink({link: link, code: code, input: input});

model.save(function (err) {
  if (err) {
    console.log(err);             //notify the client
  }
});

return link;
}

module.exports = addpermalink;
