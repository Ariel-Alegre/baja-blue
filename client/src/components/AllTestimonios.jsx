import React, { useState, useEffect } from 'react';
import { Box, Typography, Rating, Avatar, Stack, Grid } from '@mui/material';

const AllTestimonios = () => {
  // Estado para almacenar los testimonios obtenidos desde el servidor
  const [testimonios, setTestimonios] = useState([]);

  // Realizar la solicitud para obtener las reseñas
  useEffect(() => {
    // Hacer la solicitud a la ruta /reviews para obtener las reseñas
    fetch('https://server-bajablue-production.up.railway.app/api/reviews') 
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTestimonios(data.data); // Almacenar las reseñas en el estado
        }
      })
      .catch((error) => {
        console.error('Error al obtener las reseñas:', error);
      });
  }, []); // Solo se ejecuta una vez al cargar el componente
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: 4 }}>
      <div
        className="mx-auto text-center mb-5"
        style={{ maxWidth: '900px' }}
      >
        <Typography variant="h3" gutterBottom>
        Our ClientsReviews
        
        </Typography>
        <Typography variant="body1" color="text.secondary">
        What our clients say about us.
        </Typography>
      </div>
      <Grid container spacing={4}>
        {testimonios.map((testimonio, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: 2,
                padding: 3,
                boxShadow: 3,
                backgroundColor: '#fff',
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)', 
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                 <Avatar
                            src={testimonio.avatar || null}
                            alt={testimonio.name}
                            sx={{
                              width: 56,
                              height: 56,
                              backgroundColor: testimonio.avatar
                                ? null
                                : getRandomColor(),
                            }}
                          >
                            {!testimonio.avatar ? testimonio.name[0].toUpperCase() : null}
                          </Avatar>
                <Box>
                  <Typography variant="h6">{testimonio.name}</Typography>
                  <Rating value={testimonio.rating} precision={0.5} readOnly />
                </Box>
              </Stack>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {testimonio.comment}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllTestimonios;
