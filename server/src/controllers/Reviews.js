require('dotenv').config();
const { Review } = require('../db');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2; // Cloudinary

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Configuración de multer para manejo de archivos


// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'xpowertrade60@gmail.com',
    pass: process.env.PASS,
  },
  socketTimeout: 15000,
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Reviews: async (req, res) => {
    const { name, comment, rating } = req.body;

    try {
      // Validar los campos requeridos
      if (!name || !rating) {
        return res.status(400).json({ message: 'Todos los campos son requeridos.' });
      }

      // Validar que el rating sea un número entre 1 y 5
      if (isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'La calificación (rating) debe ser un número entre 1 y 5.' });
      }

      // Si hay un archivo en la solicitud, súbelo a Cloudinary
      let avatarUrl = '';
      if (req.file) {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: 'avatars', // Carpeta donde se almacenarán los avatares
          resource_type: 'image',
        });
        avatarUrl = uploadResult.secure_url; // URL del avatar subido
      }

      // Crear la reseña en la base de datos
      const newReview = await Review.create({
        name,
        comment: comment || '',
        rating,
        avatar: avatarUrl, // Guardar el avatar
        date: new Date(),
      });

      // Respuesta de éxito
      res.status(201).json({ message: 'Reseña agregada con éxito.', review: newReview });
    } catch (error) {
      console.error('Error en el servidor:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
