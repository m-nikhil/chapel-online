const express = require('express');
const router = express.Router();

const permalinkmodel = require('../models/permalinkModel');



router.get( '/api/getpermalinkmodel/:link', function (req,res) {
  const link = req.params.link;
  
    permalinkmodel.find({ link },(err, model) => {
      if(err) {
        res.send(err);
      }
      else {
        res.json(model);
      }
    });

});


module.exports = router;
