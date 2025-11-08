require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  socketTimeout: 15000, // tiempo de espera en milisegundos
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Contact: async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validar que se haya proporcionado un correo electrónico
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    // Validar que el correo electrónico tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    try {
      const emailContent = `
<html>
  <body style="font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="text-align: center; color: #0056b3;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">${message}</p>
    </div>
  </body>
</html>

      `;

      // Enviar correo interno con los detalles del formulario
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL, // Dirección de correo interna
        subject: subject,
        html: emailContent,
      });

      const emailUser = `
<html>
  <body style="background-color: #f4f4f4; font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6; padding: 2em 0;">
    <div style="max-width: 600px; margin: 0 auto; padding: 30px; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
      <img src="https://www.bajabluetransportation.com.mx/img/Logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2 style="color: #0056b3; font-size: 24px;">Hello, ${name}!</h2>
      <p style="font-size: 16px; margin-bottom: 20px;">Thank you for contacting us. We have received your message and will get back to you soon.</p>
      <p style="font-size: 16px; color: #555;">In the meantime, feel free to reach out if you have any other questions.</p>
      <p style="margin-top: 30px; font-size: 14px; color: #888;">This is an automated message, please do not reply.</p>
    </div>
  </body>
</html>


      `;

      // Enviar correo de confirmación al usuario
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email, // Enviar a la dirección del usuario
        subject: `Thank you for contacting us, ${name}`,
        html: emailUser,
      });

      console.log('Correos enviados correctamente');
      return res.status(200).send({ success: true, message: 'Correos enviados exitosamente.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
