const express = require('express');
const router = express.Router();
const General = require('../modules/general/controller');

router.get('/initialization_status', async (req, res, next) => {
  try {
    await new General().initializationStatus(req, res, next);
  } catch (e) {
    next(e);
  }
});

router.get('/boilerplate', async (req, res, next) => {
  try {
    await new General().boilerplate(req, res, next);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
