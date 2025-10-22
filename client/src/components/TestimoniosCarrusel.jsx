import React from "react";
import Slider from "react-slick";
import { Box, Typography, Rating, Avatar, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimoniosCarrusel = () => {
  const [testimonios, setTestimonios] = React.useState([]);
console.log(testimonios)
  React.useEffect(() => {
    fetch("https://server-bajablue-production.up.railway.app/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTestimonios(data.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener las reseñas:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: testimonios.length > 1, // Solo activar 'infinite' si hay más de 1 testimonio
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: testimonios.length > 1 ? 2 : 1, // Si solo hay una reseña, mostrar solo 1
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: testimonios.length > 1 ? 2 : 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const limitarTexto = (texto) => {
    const limite = 100;
    return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>


    {testimonios?.length > 0 ? (
    <>

     <div className="container-fluid  ">
            <div className="container pb-5">
              <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "800px" }}
              >
                <h1 className="display-5 text-capitalize mb-3">
                  Our Clients<span className="text-primary"> Reviews</span>
                </h1>
                <Typography variant="body1" color="text.secondary">
            What our clients say about us.
            </Typography>
              </div>
            </div>
          </div>
    <Box
      sx={{
        width: "100%",
        padding: 2,
        "& .slick-slide > div": {
          display: "flex",
          justifyContent: "center",
        },
        "& .slick-dots li button:before": {
          color: "#000", // Cambia el color de los puntos
        },
        "& .slick-dots li.slick-active button:before": {
          color: "#1976d2", // Cambia el color del punto activo
        },
      }}
      className="wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <Slider {...settings}>
        {testimonios.map((testimonio, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              padding: 3,
              boxShadow: 2,
              backgroundColor: "#fff",
              maxWidth: 300,
              textAlign: "center",
              margin: "0 auto", // Centra cada tarjeta
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
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
            </Stack>
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              {testimonio.name}
            </Typography>
            <Rating value={testimonio.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              {limitarTexto(testimonio.comment)}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>

    </>
    ): null}
    </div>

  );
};

export default TestimoniosCarrusel;
