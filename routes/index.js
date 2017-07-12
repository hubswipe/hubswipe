const express = require('express');
const router = express.Router();
const {User} = require('../models/user');


router.route('/')

  .get((req, res, next) => {
    res.render('index');
  })
  .post((req, res, next) => {

  });

module.exports = router;
