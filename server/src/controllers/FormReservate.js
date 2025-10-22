const { Reservate } = require('../db'); // Asegúrate de que este modelo esté correctamente importado
require('dotenv').config();

module.exports = {
  FormReservate: async (req, res) => {
    try {
      // Extraer datos del cuerpo de la solicitud
      const {
        name,
        lastName,
        email,
        phone,
        comment,
        currency,
        departureDate,
        departureTime,
        from,
        isReturn,
        country,
        passengers,
        returnDate,
        returnTime,
        to,
        vehicles,
        price,
      } = req.body;

  
      // Crear una nueva reservación
      const newReservation = await Reservate.create({
        name,
        lastName,
        email,
        phone,
        comment,
        currency,
        departureDate,
        departureTime,
        country,
        from,
        isReturn,
        passengers,
        returnDate,
        returnTime,
        to,
        vehicles,
        price,
      });

      // Responder con éxito
      console.log("Reservación creada exitosamente.")

      res.status(201).json({
        message: 'Reservación creada exitosamente.',
        reservation: newReservation,
      });
    } catch (error) {
      console.error('Error al crear la reservación:', error);
      res.status(500).json({ message: 'Error en el servidor. Inténtalo nuevamente más tarde.' });
    }
  },
};
