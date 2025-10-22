require("dotenv").config();
const paypal = require("@paypal/checkout-server-sdk");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Configuración del cliente PayPal
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

module.exports = {
  // Función para crear un pago
  Payment: async (req, res) => {
    try {
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
    
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
                currency: currency || 'USD',
                total: price.toString(),
            },
          },
        ],
      });

      const order = await client.execute(request);
      res.status(200).json({
        id: order.result.id,
        links: order.result.links,
      });
    } catch (error) {
      console.error("Error al crear el pago:", error.message);
      res.status(500).send("Error al crear el pago.");
    }
  },

  // Webhook para procesar notificaciones de PayPal
  processWebhook: async (req, res) => {
    try {
      const webhookEvent = req.body;
      console.log("Evento recibido desde PayPal:", webhookEvent);

      // Procesar eventos específicos (ejemplo: CAPTURE_COMPLETED)
      if (webhookEvent.event_type === "PAYMENT.CAPTURE.COMPLETED") {
        const captureId = webhookEvent.resource.id;
        console.log(`Pago capturado exitosamente: ${captureId}`);
        // Aquí puedes actualizar tu base de datos o tomar acciones adicionales
      }

      res.status(200).send("Webhook procesado exitosamente.");
    } catch (error) {
      console.error("Error al procesar el webhook:", error.message);
      res.status(500).send("Error al procesar el webhook.");
    }
  },

  CapturePayPalPayment: async (req, res) => {
  try {
    const { orderId, 

        
     } = req.body; // ID del pedido pasado como parámetro en la URL

    const request = new paypal.orders.OrdersGetRequest(orderId);
    const response = await client.execute(request);

    res.status(200).json(response.result); // Devuelve los detalles del pedido
  } catch (error) {
    console.error("Error al obtener los detalles del pago:", error.message);
    res.status(500).send("Error al obtener los detalles del pago.");
  }
}
};