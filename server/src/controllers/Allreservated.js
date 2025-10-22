const { ReservateAirportToHotel } = require('../db');
module.exports = {
    Allreservated: async (req, res) => {
    try {
  
        const Reservated = await ReservateAirportToHotel.findAll();

        console.log('Todas las reservaciones');

        res.status(200).send({success: true, data: Reservated})


    } catch (error) {
      console.error('error al obtener todas las reservaciones:', error);
      res.status(500).json({ error: 'error al obtener todas las reservaciones' });
    }
  }
};
