import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Testimonio from "../components/TestimoniosCarrusel";
import { Image } from "antd";
import {  Typography } from '@mui/material';
import FormBook from '../components/FormBook'
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";
  const destinations = [

    {
      title: "Cabo San Lucas",
      time: "45 to 50 minutes from the airport",
      description:
        "It’s known for its beaches, water-based activities and nightlife. Playa El Médano is Cabo's main beach, with outdoor restaurants and numerous bars. Past the marina is Land's End promontory, site of Playa del Amor (Lover's Beach) and El Arco, a natural archway in the sea cliffs.",
      popular: ["Casa Dorada", "Breathless", "Sandos Finisterra", "Riu Santa Fe"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2020/07/cabo-san-lucas-airport-transportation-2-e1596274712311.jpg?id=1247", // Replace with actual URL
    },
  
    {
      title: "Cabo San Lucas Pacific Side",
      time: "50 to 60 minutes from the airport.",
      description:
        "The Pacific side of Los Cabos is where most of the new hotels are opening. Famous for the beaches and the beautiful sunsets, this side of Cabo has been gaining notoriety due to the luxury hotels located on the coast facing the Pacific Ocean.",
      popular: ["Pueblo Bonito Sunset ", "Montecristo", "Hard Rock", "Nobu Los Cabos"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2020/07/cabo-san-lucas-paficic-side-shuttle-e1596274665673.jpg?id=1285", // Replace with actual URL
    },
  ];
  


export default function Home() {
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);

  const openPreview = () => {
    setVisible(true); // Abrimos el preview
  };


  const vehicle = [
    require("../img/img-bajablue/auto-2.jpg"),
    require("../img/img-bajablue/auto-1.jpg"),
    require("../img/img-bajablue/auto-6.jpg"),
    require("../img/img-bajablue/auto-10.jpg"),
    require("../img/img-bajablue/auto-11.jpg"),
    require("../img/img-bajablue/auto-45.jpg"),
    require("../img/trafies-bajablue/Trafier-10.jpg"),
    require("../img/trafies-bajablue/camionetas-2.jpg"),
    require("../img/trafies-bajablue/Trafier-2.jpg"),






 


  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}
          >
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
             <a  href="https://www.google.com/maps/place/37WC%2BRV6,+San+Jos%C3%A9+del+Cabo,+B.C.S.,+México" className="text-muted me-4"
                
                  target="_blank"
                        rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Our location
                </a>
                <a href="tel:+526241291126" className="text-muted me-4"
                     target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +526241291126
                </a>
                <a href="mailto:bajabluetransportation@gmail.com" className="text-muted me-0"
                     target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope text-primary me-2"></i>
                  bajabluetransportation@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.facebook.com/profile.php?id=61576103212358"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
{/*                 <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <img src="img/Logo.png" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link  active">
                  Home
                </Link>
      
                <Link to="/destinations" className="nav-item nav-link ">
                  Destinations
                </Link>
        

                  <Link to="/gallery" className="nav-item nav-link">
           Gallery
                </Link>
                       
                 <Link to="/about-us" className="nav-item nav-link">
                About us
                </Link>
                <Link to="/contact-us" className="nav-item nav-link">
                Contact Us
                </Link>
              
             
              </div>
              <Link
                to="/book-now"
                className="btn btn-primary rounded-pill py-2 px-4"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="header-carousel ">
        <div
          id="carouselId"
          className="carousel slide "
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="First slide"
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
            ></li>
          </ol>
          <div className="carousel-inner " role="listbox">
            <div className="carousel-item active">
              <img
                src={require("../img/img-bajablue/auto-4.jpg")}
                className="img-fluid w-100 "
                alt="First slide"
              />
              <div className="carousel-caption ">
                <div className="container py-5">
                  <div className="row g-5">
                    <div
                      className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="0.2s"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="text-start">
                        <h1 className="display-5 text-white">
                    Discover Los Cabos with the service you deserve with Baja Blue.
                        </h1>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 fadeInLeft animated "
                      data-animation="fadeInLeft"
                      data-delay="0.2s"
                      style={{ animationDelay: "0.2s", }}
                    >
              
                    
                 <FormBook/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
                 
                </div>
              </div>
            </div>
    <div className="container-beer py-5  ">
        <div
          className="img-aditional-container wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <img
            src={require("../img/services-aditional/bebidas.jpg")}
            className="img-aditional"
            alt="Image"
          />
          <p>Beer and water</p>
        </div>
        <div
          className="img-aditional-container wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <img
            src={require("../img/services-aditional/comestibles .jpg")}
            className="img-aditional"
            alt="Image"
          />
          <p>Grocery stop upon request</p>
        </div>
        <div
          className="img-aditional-container wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <img
            src={require("../img/services-aditional/conduciendo.jpg")}
            className="img-aditional"
            alt="Image"
          />
          <p>Bilingual drivers</p>
        </div>
        <div
          className="img-aditional-container wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <img
            src={require("../img/services-aditional/asiento-bebe.jpg")}
            className="img-aditional"
            alt="Image"
          />
          <p>Car seats upon request </p>
        </div>
      </div>

    

      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Baja blue – Low Cost Airport Transfers
            </h1>
            <p className="mb-0">
              With our easy online reservation system, we have outdone our
              competitors just 2 clicks and your reservation is complete, we
              believe you should only have to input your reservation once. Your
              flight and hotel information is then entered into our
              sophisticated reservation system that our professionals are
              constantly monitoring.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <span className="fa fa-check fa-2x"></span>

                    <div className="ms-4">
                      <h5 className="mb-3">
                        Phone Customer Service Available 24/7
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <span className="fa fa-check fa-2x"></span>

                    <div className="ms-4">
                      <h5 className="mb-3">
                        Unlimited changes and free cancellations
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <Image.PreviewGroup
                items={[
                  require("../img/img-bajablue/s.jpg"),
                  require("../img/img-bajablue/Turistas.jpg"),
                  require("../img/img-bajablue/Turistas-4.jpg"),
                  require("../img/img-bajablue/Turistas-2.jpg"),
                  require("../img/img-bajablue/Turistas-3.jpg"),

                  require("../img/img-bajablue/Turistas-9.jpg"),

                  require("../img/img-bajablue/Turistas-7.jpg"),

                  require("../img/img-bajablue/about-us2.jpg"),
                  require("../img/img-bajablue/d.jpg"),
                  require("../img/img-bajablue/silla.jpg"),
                  require("../img/img-bajablue/heladera.jpg"),
                  require("../img/img-bajablue/t.jpg"),
                  require("../img/trafies-bajablue/trafies-54.jpg"),
                  require("../img/img-bajablue/sa.jpg"),







                  
    require("../img/trafies-bajablue/Trafier-5.jpg"),
    require("../img/trafies-bajablue/Trafier-2.jpg"),


    require("../img/trafies-bajablue/trafies-84.jpg"),
    require("../img/trafies-bajablue/combinada.jpg"),
    require("../img/trafies-bajablue/hotel.jpg"),



                 require("../img/trafies-bajablue/Trafier-5.jpg"),
    require("../img/trafies-bajablue/Trafier-2.jpg"),


    require("../img/trafies-bajablue/trafies-84.jpg"),
    require("../img/trafies-bajablue/combinada.jpg"),
    require("../img/trafies-bajablue/hotel.jpg"),



    require("../img/img-bajablue/auto-2.jpg"),
    require("../img/img-bajablue/auto-1.jpg"),
    require("../img/img-bajablue/auto-6.jpg"),
    require("../img/img-bajablue/auto-10.jpg"),
    require("../img/img-bajablue/auto-11.jpg"),
    require("../img/img-bajablue/auto-45.jpg"),
    require("../img/trafies-bajablue/Trafier-10.jpg"),
    require("../img/trafies-bajablue/camionetas-2.jpg"),
    require("../img/trafies-bajablue/Trafier-2.jpg"),


               


                ]}
                preview={{
                  visible: visible,
                  onVisibleChange: (value) => setVisible(value), // Cerramos el preview
                }}
              >
                <Image
                  src={require("../img/img-bajablue/s.jpg")}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                  alt="Img"
                />
              </Image.PreviewGroup>
              <div className="col-12 py-2">
                <Link
              to='/gallery'
                  className="btn btn-primary w-100 py-2"
                >
                  View more
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Grocery stops on request</h5>
                    </div>
                    <span className="fa fa-check fa-2x"></span>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Best price guarantee</h5>
                    </div>
                    <span className="fa fa-check fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

         <div className="destinations-container wow fadeInUp"  data-wow-delay="0.1s">
      <h1 style={{textAlign: "center"}}>Destinations</h1>
      <p style={{textAlign: "center"}}>
        Baja blue provides private and shared shuttles, round trip,
        and one way to all the hotels, condos, villas, Airbnb, and homes located
        in these zones.
      </p>
      {destinations.map((destination, index) => (
        <div key={index} className="destination-card">
          <img src={destination.image} alt={destination.title} />
          <div className="destination-info">
            <h2>{destination.title}</h2>
            <p className="time">{destination.time}</p>
            <p>{destination.description}</p>
            <p className="popular">
              <strong>Popular destinations: </strong>
              {destination.popular.join(", ")}
            </p>
          </div>
        </div>
      ))}

        <div className="col-12 py-2">
                <Link
                to="/destinations"
                  className="btn btn-primary w-100 py-2"
                >
                  View more
                </Link>
              </div>
    </div>
      <div className="container-fluid blog margin-bottom-5 py-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Vehicles for all your transportation needs
            </h1>
          </div>
          <div className="row g-4">
            <div class=" d-flex flex-wrap justify-content-center gap-2 " >
                {vehicle&& vehicle.map((img, index) => (

                    <div
                    className="wow fadeInUp"
                    data-wow-delay={`0.${index +1}s`}
                    >

                <Image
                  width={400}
                  height={300}
                  src={img}
                  style={{objectFit: "cover"}}
               
                  />
                  </div>
           
                ))}

            </div>
          </div>
        </div>
      </div>




  
            <Testimonio />
   
















      
<Footer/>
<ButtonWhatsapp/>
     
    </div>
  );
}
