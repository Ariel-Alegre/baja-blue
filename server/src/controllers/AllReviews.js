const { Review } = require('../db');
module.exports = {
    AllReviews: async (req, res) => {
    try {
  
        const review = await Review.findAll();

        console.log('Todas las Reseñas');

        res.status(200).send({success: true, data: review})


    } catch (error) {
      console.error('error al obtener todas las reseñas:', error);
      res.status(500).json({ error: 'error al obtener todas las reseñas' });
    }
  }
};
