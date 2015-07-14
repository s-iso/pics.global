var express = require('express');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');
var streamifier = require('streamifier');
var imageQueueServvice = require('../services/imageQueueService');

router.use(multer({inMemory: true}));

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.files);
  imageQueueServvice.putImageInQueue(req.files.image);
  res.end("file uploaded");
});

module.exports = router;
