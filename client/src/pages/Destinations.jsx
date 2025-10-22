import React from 'react'

import { Link, useLocation } from "react-router-dom";
import FormBook from '../components/FormBook'
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";

export default function Destinations() {

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const destinations = [
    {
      title: "San Jose del Cabo",
      time: "25 to 30 minutes from the airport",
      description:
        "It's known for its sandy beaches and colonial buildings. The San José missionary church, rebuilt in 1940, faces Plaza Mijares in the heart of the historic district. Nearby art galleries exhibit work by local artists. East of the city is San Jose Estuary, a nature reserve with bird species like hummingbirds, ibis, and herons.",
      popular: ["Cabo Azul", "Viceroy Los Cabos", "Krystal Los Cabos", "Royal Solaris"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2020/07/san-jose-del-cabo-shuttle-e1596274704175.jpg?id=1253", // Replace with actual URL
    },
    {
      title: "Puerto Los Cabos",
      time: "30 to 40 minutes from the airport",
      description:
        "Puerto Los Cabos is a 2,000-acre, master-planned, mixed-use resort community. The community encompasses gated residential neighborhoods, hotels, golf courses, a world-class marina with upcoming Marina Village, botanical and sculptural gardens, and the Puerto Los Cabos Club.",
      popular: ["Secrets Puerto Los Cabos", "El Ganzo", "JW Marriott", "Zadún"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2020/07/puerto-los-cabos-e1596274644990.jpg?id=1287", // Replace with actual URL
    },
    {
      title: "East Cape Side",
      time: "40 to 120 hrs from the airport",
      description:
        "This region is known for its natural beauty, pristine beaches, and excellent conditions for activities such as sportfishing, diving, snorkeling, windsurfing, and kitesurfing.",
      popular: ["El Encanto de la Laguna", "The White Lodge"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/06/esat-cape-los-cabos.jpg?id=6206", // Replace with actual URL
    },
    {
      title: "The Corridor",
      time: "30 to 45 minutes from the airport",
      description:
        "The Corridor is a 20-mile highway that connects Cabo San Lucas and San Jose del Cabo. This stretch is home to some of the best beaches and most luxurious resorts in all Los Cabos.",
      popular: ["Palmilla", "Solis", "The Westin", "Grand Velas"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2020/07/the-corridor-los-cabos-airport-shuttle-e1596274677490.jpg?id=1255", // Replace with actual URL
    },
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
                       <Link to="/" className="nav-item nav-link  ">
                         Home
                       </Link>
             
                       <Link to="/destinations" className="nav-item nav-link active">
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
    
      
       

        

   
        <div className="destinations-container wow fadeInUp"  data-wow-delay="0.1s">
      <h1>Destinations</h1>
      <p>
      Baja Blue offers private and shared shuttles, both one-way and round trip, to all hotels, villas, condos, Airbnbs, and homes in Los Cabos.
      </p>
      <p>
        Our friendly drivers, support staff, and hands-on management are focused on making your transfer to and from Los Cabos International Airport (SJD) smooth, safe, and enjoyable.
        <strong>We move people — and we make travelers happy.</strong>
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
    </div>
  

      

     


       <Footer/>


       <ButtonWhatsapp/>

        

    

    </div>
    )
}