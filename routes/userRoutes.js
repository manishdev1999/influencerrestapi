const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/:email')
  .post(userController.createUser);

  router
  .route('/:apikey')
  .get(userController.validate);


module.exports = router;
