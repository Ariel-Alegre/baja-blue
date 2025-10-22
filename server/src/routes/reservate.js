
const { Router  }= require('express');
const router = Router();


const {Reservate} = require('../controllers/Reservate');
const {ResevateHotelToAirport} = require('../controllers/ResevateHotelToAirport');
const {Login} = require('../controllers/Login');
const {Allreservated} = require('../controllers/Allreservated');



router.post('/reservate', Reservate ) 
router.get('/reservates', Allreservated ) 

router.post('/reservate-hotel', ResevateHotelToAirport ) 
router.post('/iniciar-sesion', Login ) 




















module.exports = router