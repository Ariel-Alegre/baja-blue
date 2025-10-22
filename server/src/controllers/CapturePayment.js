require('dotenv').config();
const axios = require('axios');

// Función para obtener el token de acceso
async function getAccessToken() {
    const clientId = 'AcNrFebbIJt_5Eq7IkrO4t2O8z9TpT-XDtd0FjOstST7Up7IAOQ2Tdp4LGS9fLuOjPIGfMVbT0gfIwC9';  // Tu Client ID de PayPal
    const clientSecret = 'EGblCjksA7xoBvawY6P6StG5o-FvebPesiVe8rL9YOqd0OWRKqRRdgxCUUe4YuyuDMwLi_gPOo5e6285';  // Tu Client Secret de PayPal

    const response = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        'grant_type=client_credentials',
        {
            headers: {
                Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );
    return response.data.access_token;
}

// Función para capturar el pago
module.exports = {
    CapturePayment: async (req, res) => {
        const { paymentId, PayerID } = req.query; // Obtener paymentId y payerId de la URL
  console.log("paymentId:", paymentId)
  console.log("payerId:", PayerID)

        if (!paymentId || !PayerID) {
            return res.status(400).send('Faltan parámetros');
        }

        try {
            // Obtener token de acceso
            const token = await getAccessToken();

            // Realizar la solicitud para obtener los detalles del pago antes de capturarlo
            const paymentDetailsResponse = await axios.get(
                `https://api-m.sandbox.paypal.com/v1/payments/payment/${paymentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Detalles del pago:', paymentDetailsResponse.data);
            if (paymentDetailsResponse.data.state !== 'approved') {
                return res.status(400).send('El pago no está aprobado');
            }

            // Realizar la solicitud para capturar el pago
            const captureResponse = await axios.post(
                `https://api-m.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,
                {
                    payer_id: PayerID,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Pago capturado:', captureResponse.data);
            
            // Responder con la información del pago
            res.status(200).json(captureResponse.data);
        } catch (error) {
            console.error('Error al capturar el pago:', error.response ? error.response.data : error.message);
            res.status(500).send('Error al capturar el pago');
        }
    },
};
