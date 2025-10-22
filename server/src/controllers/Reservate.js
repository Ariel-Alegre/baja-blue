require('dotenv').config();
const { ReservateAirportToHotel } = require('../db');
const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');

const transporter = nodemailer.createTransport({
  service: 'gmail', // o reemplazar con host SMTP si usás dominio personalizado
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Reservate: async (req, res) => {
    const {
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
      returnDate,
      returnTime,
      to,
      vehicles,
      price,
      flightNumber,
      airline,
    } = req.body;

    // Validación básica
    if (!name || !lastName || !email || !phone || !departureDate || !departureTime || !from || !to || !vehicles || !price) {
      return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    }

    try {
      // Sanitizar comentario
      const cleanComment = sanitizeHtml(comment || '', {
        allowedTags: [],
        allowedAttributes: {},
      });

      // Guardar en la base de datos
const isReturnBool = isReturn === true || isReturn === 'true';

const newReservation = await ReservateAirportToHotel.create({
  name,
  lastName,
  email,
  phone,
  comment: cleanComment,
  currency,
  departureDate,
  departureTime,
  country,
  from,
  isReturn: isReturnBool,
  returnDate: isReturnBool ? returnDate : "-",
  returnTime: isReturnBool ? returnTime : "-",
  to,
  vehicles,
  price,
  flightNumber,
  airline,
});
      console.log('Reservación guardada exitosamente:', newReservation);

      // EMAIL AL ADMIN
      const emailAdmin = `
    <html>
  <body style="background-color: #f4f4f4; padding: 2em 0;">
    <table style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 10px; font-family: Arial, sans-serif; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
      
      <!-- Encabezado con logo -->
      <tr>
        <td style="text-align: center; padding: 1.5em; border-top-left-radius: 10px; border-top-right-radius: 10px; background: linear-gradient(135deg, #005f73, #0a9396);">
          <img src="https://www.bajabluetransportation.com.mx/img/Logo.png" alt="Baja Blue Transportation" style="max-width: 160px;">
        </td>
      </tr>

      <!-- Cuerpo del mensaje -->
      <tr>
        <td style="padding: 2.5em 2em; color: #333;">
          <h2 style="color: #005f73; margin-bottom: 1em;">Nueva reserva recibida</h2>

          <p style="font-size: 15px; color: #444; margin-bottom: 1.5em;">
            Se ha registrado una nueva solicitud de traslado con los siguientes datos:
          </p>

          <ul style="list-style: none; padding: 0; font-size: 15px; line-height: 1.7; color: #333;">
            <li><strong>Cliente:</strong> ${name} ${lastName}</li>
            <li><strong>Teléfono:</strong> ${phone}</li>
            <li><strong>Correo:</strong> ${email}</li>
            <li><strong>País:</strong> ${country}</li>
            <li><strong>Aerolínea:</strong> ${airline}</li>
            <li><strong>Nro. de vuelo:</strong> ${flightNumber}</li>
            <li><strong>Desde:</strong> ${from}</li>
            <li><strong>Hasta:</strong> ${to}</li>
            <li><strong>Vehículos:</strong> ${vehicles}</li>
            <li><strong>Fecha salida:</strong> ${departureDate}</li>
            <li><strong>Hora salida:</strong> ${departureTime}</li>
            ${isReturn ? `
              <li><strong>Fecha regreso:</strong> ${returnDate}</li>
              <li><strong>Hora regreso:</strong> ${returnTime}</li>
            ` : ''}
            ${cleanComment ? `
              <li><strong>Comentario:</strong> ${cleanComment}</li>
            ` : ''}
          </ul>

          <p style="margin-top: 2em; text-align: center; font-size: 18px; font-weight: bold; color: #0a9396;">
            Total: $${price} ${currency}
          </p>
        </td>
      </tr>
      
    </table>
  </body>
</html>
`;

      // EMAIL AL CLIENTE
      const emailClient = `
        <html>
  <body style="background-color: #f4f4f4; padding: 2em 0;">
    <table style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 10px; font-family: Arial, sans-serif; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);">
      
      <!-- Encabezado con logo -->
      <tr>
        <td style="text-align: center; padding: 1.5em 1em; border-top-left-radius: 10px; border-top-right-radius: 10px; background: linear-gradient(135deg, #005f73, #0a9396);">
          <img src="https://www.bajabluetransportation.com.mx/img/Logo.png" alt="Tigress Transport" style="max-width: 160px;">
        </td>
      </tr>

      <!-- Contenido principal -->
      <tr>
        <td style="padding: 2.5em 2em; color: #333333;">
          <h2 style="color: #005f73; margin-bottom: 1em;">Reservation Confirmed</h2>
          
          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            Thank you for choosing <strong>Baja Blue</strong>. Your reservation has been successfully completed.
          </p>

          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            A member of our team will reach out shortly to confirm all the details and answer any remaining questions you may have.
          </p>

          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            We look forward to providing you with a comfortable and reliable experience.
          </p>

          <!-- Botón -->
          <div style="text-align: center; margin: 2em 0;">
            <a href="https://www.bajabluetransportation.com.mx" target="_blank" style="background-color: #0a9396; color: #ffffff; padding: 0.8em 1.5em; border-radius: 5px; text-decoration: none; font-weight: bold;">
              Visit Our Website
            </a>
          </div>

          <p style="font-size: 13px; color: #888;">
            If you have any urgent questions, please contact us at <a href="mailto:bajabluetransportation@gmail.com" style="color: #0a9396;">bajabluetransportation@gmail.com</a>.
          </p>

          <p style="margin-top: 2em; font-size: 13px; color: #555;">
            — The Baja Blue Team
          </p>
        </td>
      </tr>

    </table>
  </body>
</html>`;

      // Enviar ambos correos en paralelo
      await Promise.all([
        transporter.sendMail({
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: 'There is a new reservation!',
          html: emailAdmin,
        }),
        transporter.sendMail({
          from: process.env.EMAIL,
          to: email,
          subject: 'Your reservation has been successfully completed!',
          html: emailClient,
        }),
      ]);

      // Responder al cliente
      res.status(200).json({
        message: 'Reservación creada y correos enviados exitosamente.',
        reservationId: newReservation.id,
      });
    } catch (error) {
      console.error('Error en el servidor:', error.message);
      res.status(500).json({ message: 'Error en el servidor.' });
    }
  },
};
