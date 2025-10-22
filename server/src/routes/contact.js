
const { Router  }= require('express');
const router = Router();

const cors = require('cors');

const {Contact} = require('../controllers/Contact');

router.use(cors());

router.post('/contact', Contact ) 


















module.exports = router