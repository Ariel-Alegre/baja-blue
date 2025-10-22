const jwt = require('jsonwebtoken');
const { Admin } = require('../db');
require('dotenv').config();

module.exports = {
  LoginAdmins: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Admin.findOne({ where: { email } });

      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      /* const isMatch = await bcrypt.compare(password, user.password); */
      if (password !== user.password) {
        console.log('Contraseña incorrecta');
        return res.status(400).json({ message: 'Credenciales incorrectas' });
      }
      const tokenPayload = {
        id: user.id,
        email: user.email,
        password: user.password,
       
      };

      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN);

      console.log('Inicio de sesión exitoso');
      return res.json({ token, role: user.role });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
