const express = require('express');
const influencerController = require('../controllers/influencerController');
const API = require('../middleware/apikeys');
const userController = require('./../controllers/userController');

const router = express.Router();

// router.param('id', tourController.checkID);


router
  .route('/:apikey')
  .get( userController.validate, influencerController.getAllInfluencer)
  .post( userController.validate, influencerController.createInfluencer);

router
  .route('/:apikey/:id')
  .get( userController.validate, influencerController.getInfluencer)
  .patch( userController.validate, influencerController.updateInfluencer)
  .delete( userController.validate, influencerController.deleteInfluencer);

module.exports = router;
