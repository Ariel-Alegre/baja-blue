require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
  Login: async (req, res) => {
    const { correo_electronico, contraseña } = req.body;

    try {
      if (correo_electronico !== 'admin@gmail.com' || contraseña !== 'admin2025') {
        console.log('Credenciales inválidas');
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }

      const tokenPayload = {
        id: 1,
        name: 'Admin',
        lastName: 'User',
        email: 'admin@gmail.com',
        role: 'admin',
      };

      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN,);

      console.log('✅ Inicio de sesión exitoso');
      return res.json({
        message: 'Inicio de sesión exitoso',
        token,
        role: 'admin',
        userId: 1,
        status: 'activo',
      });

    } catch (error) {
      console.error('⚠️ Error en Login:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },

   
};
