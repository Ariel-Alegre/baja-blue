require('dotenv').config();
const axios = require('axios');
const { Reservate } = require('../db');
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
    // Función para crear el pago en PayPal
    CreatePayment: async (req, res) => {
        console.log("Datos recibidos en req.body:", req.body);
        
        // Extraer los datos de la reservación desde el cuerpo de la solicitud
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
            passengers,
            returnDate,
            returnTime,
            to,
            vehicles,
            price,
            flightNumber,
            airline,
            paymentMethod,
        } = req.body;
    
        try {
            const order = {
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: currency,
                            value: price,
                        },
                    },
                ],
                application_context: {
                    brand_name: "https://www.bajabluetransportation.com.mx",
                    landing_page: "NO_PREFERENCE",
                    user_action: "PAY_NOW",
                    // Incluir los datos de la reservación en la URL de retorno
                    return_url: `https://baja-blue-transportation-production.up.railway.app/api/capture-order?name=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&price=${encodeURIComponent(price)}&currency=${encodeURIComponent(currency)}&comment=${encodeURIComponent(comment)}&departureDate=${encodeURIComponent(departureDate)}&departureTime=${encodeURIComponent(departureTime)}&from=${encodeURIComponent(from)}&isReturn=${encodeURIComponent(isReturn)}&country=${encodeURIComponent(country)}&passengers=${encodeURIComponent(passengers)}&returnDate=${encodeURIComponent(returnDate)}&returnTime=${encodeURIComponent(returnTime)}&to=${encodeURIComponent(to)}&vehicles=${encodeURIComponent(vehicles)}&airline=${encodeURIComponent(airline)}&flightNumber=${encodeURIComponent(flightNumber)}&paymentMethod=${encodeURIComponent(paymentMethod)}`,

                    cancel_url: `https://www.bajabluetransportation.com.mx/error`,
                },
            };
    
            // Generar el token de acceso
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            const {
                data: { access_token },
            } = await axios.post(
                `${process.env.PAYPAL_API}/v1/oauth2/token`,
                params,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    auth: {
                        username: process.env.PAYPAL_CLIENT_ID,
                        password: process.env.PAYPAL_CLIENT_SECRET,
                    },
                }
            );
    
            console.log(access_token);
    
            // Hacer la solicitud para crear la orden de pago
            const response = await axios.post(
                `${process.env.PAYPAL_API}/v2/checkout/orders`,
                order,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            );
    
            console.log(response.data);
    
            // Responder con los datos de la orden
            return res.json(response.data);
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            res.status(500).send('Error al procesar el pago');
        }
    },
    
    

        captureOrder: async (req, res) => {
            const { token } = req.query;
        
            // Recuperar los datos de la reservación enviados en la URL
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
                passengers,
                returnDate,
                returnTime,
                to,
                vehicles,
                price,
                flightNumber,
                airline,
                paymentMethod,

            } = req.query;
           

            try {
                const response = await axios.post(
                    `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
                    {},
                    {
                        auth: {
                            username: process.env.PAYPAL_CLIENT_ID,
                            password: process.env.PAYPAL_CLIENT_SECRET,
                        },
                    }
                );
        
                console.log("Respuesta de PayPal:", response.data);
                console.log("Status:", response.data.status);
        
                const {
                    id: orderId,
                    purchase_units: [
                        {
                            payments: {
                                captures: [
                                    {
                                        id: paymentId,
                                        status,
                                        amount: { value, currency_code: paymentCurrency },
                                    },
                                ],
                            },
                        },
                    ],
                } = response.data;
        
               
if (response.data.status === "COMPLETED") {
    const emailAdmin = `
   <html>
  <body style="background-color: #f3f3f3; display: grid; justify-content: center; max-width: 100%;">
    <div style="background-color: #fff; border: 8px solid #0091ff; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;">
      <div style="margin: 0 auto; text-align: center;">
        <img src="https://www.bajabluetransportation.com.mx/static/media/logo.7828cb5490f2e94e7d96.jpg" alt="Company Logo" style="display: block; max-width: 150px; margin: 0 auto;">
      </div>
      <p style="color: black;">Hay una nueva reservaciòn!</p>
      <p style="color: black;">Detalles de la reserva:
        <ul>
          <li>Cliente: ${name} ${lastName} </li>
          <li>Telefóno:${phone} </li>
          <li>Correo electrónico:${email} </li>
          <li>Precio Total: $${price}${currency} </li>

        </ul>
      </p>
        <p style="text-align: center;">
              <a href="https://www.bajabluetransportation.com.mx/panel/pendientes" style="display: inline-block; padding: 10px 20px; background-color: #0091ff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Ver más detalles</a>
            </p>
    </div>
  </body>
</html>
           `;
           await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Your reservation has been successfully completed!.',
            html: emailAdmin,
          });
                    const emailContent = `
           <html>
  <body style="background-color: #f3f3f3; display: grid; justify-content: center; max-width: 100%;">
    <div style="background-color: #fff; border: 8px solid #0091ff; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;">
      <div style="margin: 0 auto; text-align: center;">
        <img src="https://www.bajabluetransportation.com.mx/static/media/logo.7828cb5490f2e94e7d96.jpg" alt="Company Logo" style="display: block; max-width: 150px; margin: 0 auto;">
      </div>
      <p style="color: black;">Hello ${name} ${lastName}!</p>
      <p style="color: black;"><strong>Your reservation has been successfully completed.</strong></p>
      <p style="color: black;">Welcome to Baja Blue Transportation! We are pleased to inform you that the transportation service is at your disposal.</p>
      <p style="color: black;">Details of the reserved services:
        <ul>
          <li>From: ${from} </li>
          <li>To: ${to} </li>
          <li>Departure Date: ${departureDate} </li>
          <li>Departure Time: ${departureTime} </li>
        
          {isReturn === true && (
            <li>Return Date: ${returnDate} </li>
            <li>Return Time: ${returnTime} </li>
            ) : null
          }
          <li>Number of Passengers: ${passengers} </li>
        </ul>
      </p>
      <p style="color: black; text-align: center; font-weight: bold;">$${price}${currency}</p>

      <p style="color: black;">If you have any questions or need assistance, please do not hesitate to contact us. We are here to help you.</p>
      <p style="color: black;">Phone: <a href="tel:+52 624 129 1126"> +52 624 129 1126</a></p>

      <p style="color: black;">Thank you for trusting Baja Blue Transportation. We hope you enjoy our services!</p>
    </div>
  </body>
</html>
                  `;
            
                  await transporter.sendMail({
                    from: process.env.EMAIL,
                    to: email,
                    subject: 'Your reservation has been successfully completed!.',
                    html: emailContent,
                  });
                    // Guardar la reservación en la base de datos
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
                        flightNumber,
                        airline,
                        paymentMethod,
                        orderId,
                        paymentId,
                        status: "pendiente",
                    });
        
                    console.log("Reservación guardada exitosamente:", newReservation);
        
                    // Redirigir al cliente o responder con éxito
                    res.redirect("https://www.bajabluetransportation.com.mx/success");  // O cualquier otra respuesta necesaria
} else {
    console.log("error al realizar el pago");
   res.status(404).send({message: "error al realizar el pago"})
}
        
            } catch (error) {
                console.error("Error al capturar el pago:", error.message);
                return res.status(500).json({ message: "Error al procesar el pago" });
            }
        }
        
};
