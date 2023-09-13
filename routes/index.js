const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.firstPerson);
routes.get('/first', myController.secondPerson);

module.exports = routes;