
const { Router  }= require('express');
const router = Router();

const {Reviews} = require('../controllers/Reviews');
const {AllReviews} = require('../controllers/AllReviews');

const multer = require('multer'); // Para manejar uploads

const upload = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB
  });

router.post('/reviews', upload.single('avatar'), Reviews ) 
router.get('/reviews',  AllReviews ) 




















module.exports = router