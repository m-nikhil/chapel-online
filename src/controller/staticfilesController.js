const express = require('express');
const path = require('path');
const router = express.Router();


router.use(express.static(path.join(__dirname, '../../../chapel-online/build')));

  router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../chapel-online/build', 'index.html'));
});

module.exports = router;
