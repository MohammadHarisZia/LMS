const express = require('express')
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Head Dashboard')
})

module.exports = router


