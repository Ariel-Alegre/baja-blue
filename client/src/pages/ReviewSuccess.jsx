import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Si usas React Router para navegación

const ReviewSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirigir a la página principal o a donde necesites
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      {/* Logo de Tigress Transport como imagen */}
      <img
        src={require("../img/Logo.jpg")} // Ruta del logo de la empresa
        alt="Tigress Transport"
        style={{
          width: "200px", // Ajustar el tamaño de la imagen
          display: "block",
          margin: "auto",
          marginBottom: "20px", // Espacio debajo de la imagen
        }}
      />
      
      <Typography variant="h4" color="success.main" gutterBottom>
        Thank You for Your Review!
      </Typography>

      <Typography variant="h6" paragraph>
        Your review has been successfully submitted to Tigress Transport. We appreciate you taking the time to share your feedback with us.
      </Typography>

      <Typography variant="body1" paragraph>
        Your input helps us improve our services and provide a better experience to all of our customers.
      </Typography>

      <Button variant="contained" color="primary" onClick={handleGoBack} sx={{backgroundColor: "#ff8503", ":hover": {backgroundColor: "#ff8503"}}}>
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ReviewSuccess;
