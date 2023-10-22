const express = require('express');
const router = express.Router();
const authRoute = require('../Controllers/auth');

router.get('/', (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post('/register', authRoute.register);

router.post('/signin', authRoute.login);

module.exports = router;
