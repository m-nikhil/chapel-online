var mongoose = require('mongoose');

const permalinkSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String
  },
  input: {
    type: String
  }    //add flags
});

module.exports = mongoose.model("permalink", permalinkSchema);
