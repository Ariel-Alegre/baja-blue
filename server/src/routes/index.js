const { Router } = require('express');
const router = Router();

const routeReview = require("./reviews");
const routeReservate = require("./reservate");
const routeContact = require("./contact");

// Habilita CORS para todas las rutas de este archivo de rutas

// Usa las rutas
router.use('/api', routeReview, routeReservate, routeContact);

module.exports = router;
