var express = require('express');
var router = express.Router();

/* GET MAIN ROUTES. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign up' });
});

module.exports = router;
