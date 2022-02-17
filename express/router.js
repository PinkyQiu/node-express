const express = require('express');

const router = express.Router();

router.get('/user/list', (req, res) => {
  console.log(req.query);
  res.send('get suceeess');
});

router.post('/user/create', (req, res) => {
  res.send('post success');
});

module.exports = router;
