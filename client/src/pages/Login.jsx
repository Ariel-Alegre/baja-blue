import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setMensaje('');
    setError(false);

    try {
      const response = await axios.post('https://server-bajablue-production.up.railway.app/api/iniciar-sesion', {
        correo_electronico: values.correo_electronico,
        contraseña: values.contraseña,
      });

      const { token, usuarioId, tipo_de_negocio } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('usuarioId', usuarioId);
      localStorage.setItem('role', tipo_de_negocio);

      setMensaje('Inicio de sesión exitoso');
      setError(false);

      navigate('/admin');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setMensaje(err.response?.data?.message || 'Error al iniciar sesión');
      setError(true);
    }
  };

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <Card
        style={{ width: 350, borderRadius: 12 }}
        bodyStyle={{ padding: 24 }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <img
            src={require('../img/Logo.jpg')} // Cambia esto por la ruta correcta o una URL válida
            alt="Logo"
            style={{ width: 100, height: 'auto' }}
          />
        </div>

        <Title level={3} style={{ textAlign: 'center', marginBottom: 8 }}>
          Bienvenido
        </Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
          Inicia sesión en tu cuenta
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Correo electrónico"
            name="correo_electronico"
            rules={[
              { required: true, message: 'Por favor ingresa tu correo electrónico' },
              { type: 'email', message: 'El correo no es válido' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="contraseña"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                backgroundColor: '#0091ff',
                fontWeight: 'bold',
                height: 40,
              }}
            >
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>

        {mensaje && (
          <Alert
            message={mensaje}
            type={error ? 'error' : 'success'}
            showIcon
            style={{ marginTop: 16 }}
          />
        )}
      </Card>
    </div>
  );
};

export default Login;
