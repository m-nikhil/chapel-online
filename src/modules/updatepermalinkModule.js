
function updatepermalink (code,input,link) { //add flags

const mongoose = require('mongoose');
const permalink = require('../models/permalinkModel');

permalink.findOne({link: link}, function(err, model){
    if(err) {
      console.log(err)               //notify the client
    }
    else {
      model.code = code;
      model.input = input;

      model.save(function (err) {
        if (err) {
          console.log(err);             //notify the client
        }
      });
    }
});



}

module.exports = updatepermalink;
