const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// Session Routes
routes.post('/sessions', SessionController.create);

// ONG Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents Routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
// Profile Incident List
routes.get('/profile', ProfileController.index);

module.exports = routes;