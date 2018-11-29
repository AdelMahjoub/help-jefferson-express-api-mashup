const express = require('express');

const api = express.Router();
const reflectionController = require('../../controllers/v1/reflection');

api.use(express.json())

api
.route('/')
.get(reflectionController.get.index)
.post(reflectionController.actions.create)

api
.route('/:id')
.get(reflectionController.get.show)
.patch(reflectionController.actions.update)
.delete(reflectionController.actions.delete)

module.exports = api;