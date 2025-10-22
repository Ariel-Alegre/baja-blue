import React from 'react'

import { Link, useLocation } from "react-router-dom";
import FormBook from '../components/FormBook'
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";

export default function OurFleet() {

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const destinations = [
    {
      title: "Chevrolet Suburban",
      passengers: "5 passengers",
      luggage : "2 pieces of luggage per passenger",
      description:
        "The Chevrolet Suburban is a full-size SUV known for its spacious interior. The Suburban features three rows of seating, making it a popular choice for large families and groups, as well as substantial cargo space for transporting gear.",
      popular: ["Cabo Azul", "Viceroy Los Cabos", "Krystal Los Cabos", "Royal Solaris"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/08/suv-shuttle-cabo.jpg?id=6532", // Replace with actual URL
    },
    {
      title: "Cadillac Escalade",
      passengers: "5 passengers",
      luggage : "2 pieces of luggage per passenger",
      description:
        "The Cadillac Escalade is a full-size luxury SUV known for its bold design and premium features. This SUV is popular for those seeking versatility and a symbol of elegance.",
      popular: ["Secrets Puerto Los Cabos", "El Ganzo", "JW Marriott", "Zadún"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/08/escalade-cabo-shutle.jpg?id=6540", // Replace with actual URL
    },
    {
      title: "Toyota Hiace",
      passengers: "11 passengers",
      luggage : "2 pieces of luggage per passenger",
      description:
        "The Toyota Hiace is a spacious vehicle that accommodates up to 11 passengers, making it a popular choice for group transport and tour services. This van offers multiple seating configurations and ample legroom.",
      popular: ["El Encanto de la Laguna", "The White Lodge"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/08/cabo-shuttle-van-airport-e1726176834617.jpg?id=6556", // Replace with actual URL
    },
    {
      title: "Mercedes-Benz Sprinter",
      passengers: "19 passengers",
      luggage : "2 pieces of luggage per passenger",
      description:
        "A premium vehicle designed for transporting groups in comfort and style, the Sprinter offers modern features like USB charging ports, infotainment systems, and smooth rides.",
      popular: ["Palmilla", "Solis", "The Westin", "Grand Velas"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/08/sprinter-cabo.jpg?id=6547", // Replace with actual URL
    },
    {
      title: "Coach Bus",
      passengers: "52 passengers",
      luggage : "2 pieces of luggage per passenger",
      description:
        "The Irizar i6 is a 52-seat coach bus with exceptional comfort, ergonomic seats, and ample legroom. The interior has modern amenities such as individual reading lights, USB charging ports, and entertainment systems.",
      popular: ["Casa Dorada", "Breathless", "Sandos Finisterra", "Riu Santa Fe"],
      image: "https://caboairportshuttle.net/wp-content/uploads/2024/08/bus-airport-los-cabos.jpg?id=6565", // Replace with actual URL
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
                <a  href="https://www.google.com/maps?q=Batalla+de+Puebla,+1ro+de+Mayo,+23406+San+José+del+Cabo,+B.C.S.,+México" className="text-muted me-4"
                
                  target="_blank"
                        rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Our location
                </a>
                <a href="tel:+5216242302304" className="text-muted me-4"
                     target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +5216242302304
                </a>
                <a href="mailto:reservations@tigresstransport.com.mx" className="text-muted me-0"
                     target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope text-primary me-2"></i>
                  reservations@tigresstransport.com.mx
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.facebook.com/profile.php?id=100091411777035"
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
                    <img src="img/Logo.jpg" alt="Logo" />
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
                      <div className="nav-item dropdown">
                        <Link
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          About us
                        </Link>
                        <div className="dropdown-menu m-0">
                        <Link to="/about-us" className="dropdown-item">
                           About us
                          </Link> 
      
                          <Link
                            to="/private-transportation"
                            className="dropdown-item"
                          >
                            Private Transportation
                          </Link>
                       {/*    <Link to="/shared-shuttle" className="dropdown-item">
                            Shared Shutttle
                          </Link> */}
                          <Link to="/large-groups" className="dropdown-item ">
                            Large Groups
                          </Link>
      
                          <Link to="/gallery" className="dropdown-item">
                            Gallery
                          </Link>
                        </div>
                      </div>
                      <Link to="/destinations" className="nav-item nav-link ">
                        Destinations
                      </Link>
                      <Link to="/vehicles" className="nav-item nav-link active">
                        Our Fleet
                      </Link>
                      <Link to="/reviews" className="nav-item nav-link">
                        Our Reviews
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
                src={require("../img/Vehicles/bg-slide.jpg")}
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
                        Plan your trip with tigress tours and transport in los Cabos BCS México

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
      <h1>Our Fleet</h1>
      <p>
     <strong>Tigress transport</strong> offers various vehicles to meet its passengers’ diverse needs. Our fleet includes comfortable and premium SUVs, spacious vans, and buses. All vehicles are modern, well-maintained, and equipped with air conditioning.
      </p>
      {destinations.map((destination, index) => (
        <div key={index} className="destination-card">
          <img src={destination.image} alt={destination.title} />
          <div className="destination-info">
            <h2>{destination.title}</h2>
            <p className="time"><i class="fas fa-users"></i> {destination.passengers}. <i class="fas fa-suitcase"></i> {destination.luggage}  </p>
            <p>{destination.description}</p>
          {/*   <p className="popular">
              <strong>Popular destinations: </strong>
              {destination.popular.join(", ")}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  

      

     

<Footer/>

        <ButtonWhatsapp/>

        

    

    </div>
    )
}