const express = require('express');

const api = express.Router();

const errorsController = require('../controllers/error');

api
.use(errorsController[404])
.use(errorsController[500])

module.exports = api;