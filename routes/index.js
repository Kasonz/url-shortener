const express = require('express');
const router = express.Router();
const urlControl = require("../mongo/url_control");



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


/* GET home page. */
router.post('/create', function (req, res, next) {

  urlControl.main(req.body.something).then((savedResult) => {
    // fulfillment



  }, (error) => {
    // rejection
  });

});

module.exports = router;