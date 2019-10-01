var express = require('express');
var router = express.Router();
var geoserver = require('../helpers/geoserverRest')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GEOSERVER
router.get("/getLayerGroup/:groupName", function(req, res, next) {
  const groupName = req.params.groupName
  geoserver.getLayerGroup(groupName, result => {
    if (result === undefined) res.send(JSON.stringify([]));
    res.send(JSON.stringify(result));
  });
});



module.exports = router;
