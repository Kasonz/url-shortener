const express = require('express');
const router = express.Router();
const urlControl = require("../mongo/url_control");



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.get('/recent', function (req, res, next) {

  urlControl.recent().then((queryRes) => {
    res.send(queryRes);
  }, (error) => {
    console.log(error);
    res.send([]);
  });


});


/* GET home page. */
router.post('/create', function (req, res, next) {

  urlControl.create(req.body.source).then((shortenURL) => {
    res.send(shortenURL);

  }, (error) => {
    console.log(error);
    res.send("some error");
  });

});

module.exports = router;