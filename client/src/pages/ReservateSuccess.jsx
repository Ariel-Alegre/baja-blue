import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReservationSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 4,
        border: "1px solid #ddd",
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#ffffff",
        textAlign: "center",
      }}
    >
      {/* Logo de Baja Blue */}
      <img
    src={require("../img/Logo.jpg")} // Ruta del logo de la empresa
        alt="Baja Blue Transportation"
        style={{
          width: "180px",
          display: "block",
          margin: "0 auto 20px",
        }}
      />

      <Typography variant="h4" sx={{ color: "#005f73", fontWeight: 600 }} gutterBottom>
        Reservation Confirmed
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Thank you for choosing Baja Blue Transportation
      </Typography>

      <Typography variant="body1" sx={{ color: "#444", mb: 1.5 }}>
        We’ve received your reservation successfully. Our team will contact you shortly to confirm all the details and assist you if needed.
      </Typography>

      <Typography variant="body1" sx={{ color: "#444", mb: 3 }}>
        We look forward to providing you with a safe and comfortable experience.
      </Typography>

      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={{
          backgroundColor: "#0a9396",
          fontWeight: "bold",
          ":hover": {
            backgroundColor: "#007f86",
          },
        }}
      >
        Return to Homepage
      </Button>
    </Box>
  );
};

export default ReservationSuccess;
