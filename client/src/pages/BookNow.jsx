import React from 'react'

import { Link,useLocation } from "react-router-dom";
import FormBook from '../components/FormBook'
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";

export default function BookNow() {
  const { pathname } = useLocation();
    React.useEffect(() => {
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
                                <Link to="/" className="nav-item nav-link  ">
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
    
      
       

        

   
    

      

     


   <Footer/>


      <ButtonWhatsapp/>

        

    

    </div>
    )
}