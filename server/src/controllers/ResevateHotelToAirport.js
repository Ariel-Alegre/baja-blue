require('dotenv').config();
const { ReservateAirportToHotel } = require('../db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  ResevateHotelToAirport: async (req, res) => {
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

    try {
      // Guardar la reservación en la base de datos
   /*    const newReservation = await ReservateAirportToHotel.create({
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
      });

      console.log('Reservación guardada exitosamente:', newReservation); */

      // Enviar correos electrónicos solo después de guardar en la base de datos
      // Correo al administrador
      const emailAdmin = `
        <html>
          <body style="background-color: #f4f4f4; display: grid; justify-content: center; max-width: 100%; padding: 2em 0;">
              <div style="border: 1px solid #ddd; border-radius: 10px; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

               <div style="margin: 0 auto; text-align: center;">
                <img src=" alt="https://a0eb-45-173-181-11.ngrok-free.app/img/Logo.jpg" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">¡Hay una nueva reservación!</p>
              <p style="color: black;">Detalles de la reserva:
                <ul>
               
                
             

                </ul>
              </p>
              <p style="color: black;">Detalles del servicio reservado:
                <ul>
                   <li>Cliente: ${name} ${lastName}</li>
                  <li>Teléfono: ${phone}</li>
                  <li>Correo electrónico: ${email}</li>
                        <li>Country: ${country}</li>
                  <li>Airline: ${airline}</li>
                  <li>Flight number: ${flightNumber}</li>
                  <li>Desde: ${from}</li>
                  <li>Hasta: ${to}</li>
              
                  <li>Vehicles: ${vehicles}</li>
                  <li>Fecha de salida: ${departureDate}</li>
                  <li>Hora de salida: ${departureTime}</li>
                  ${isReturn
                    ? `<li>Fecha de regreso: ${returnDate}</li><li>Hora de regreso: ${returnTime}</li>`
                    : ''
                  }
     ${comment
                    ? `<li>Comment: ${comment}</li>`
                    : ''
                  }

                  

                </ul>
              </p>
           <p style="color: black; text-align: center; font-weight: bold;">$${price}${currency}</p>



            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: '¡Nueva reservación completada!',
        html: emailAdmin,
      });

      // Correo al cliente
      const emailContent = `
        <html>
         <body style="background-color: #f4f4f4; display: grid; justify-content: center; max-width: 100%; padding: 2em 0;">
              <div style="border: 1px solid #ddd; border-radius: 10px; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="margin: 0 auto; text-align: center;">
                <img src=" alt="https://a0eb-45-173-181-11.ngrok-free.app/img/Logo.jpg" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">Hola ${name} ${lastName}!</p>
              <p style="color: black;">Tu reservación se ha completado con éxito.</p>
              <p style="color: black;">
                <ul>
                    <li>Country: ${country}</li>
                  <li>Airline: ${airline}</li>
                  <li>Flight number: ${flightNumber}</li>
                  <li>Desde: ${from}</li>
                  <li>Hasta: ${to}</li>
              
                  <li>Vehicles: ${vehicles}</li>
                  <li>Fecha de salida: ${departureDate}</li>
                  <li>Hora de salida: ${departureTime}</li>
                  ${isReturn
                    ? `<li>Fecha de regreso: ${returnDate}</li><li>Hora de regreso: ${returnTime}</li>`
                    : ''
                  }
     ${comment
                    ? `<li>Comment: ${comment}</li>`
                    : ''
                  }
                </ul>
              </p>
                <p style="color: black; text-align: center; font-weight: bold;">$${price}${currency}</p>

      <p style="color: black;">If you have any questions or need assistance, please do not hesitate to contact us. We are here to help you.</p>
      <p style="color: black;">Phone: <a href="tel:+541161361408"> +54 11 6136 1408</a></p>

      <p style="color: black;">Thank you for trusting Tigress Transport. We hope you enjoy our services!</p>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: '¡Tu reservación ha sido completada exitosamente!',
        html: emailContent,
      });

      // Respuesta al cliente
      res.status(200).json({ message: 'Reservación creada y correos enviados exitosamente.' });
    } catch (error) {
      console.error('Error en el servidor:', error.message);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
