import React from 'react'

import { Link, useLocation } from "react-router-dom";
import { Image } from "antd";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";


export default function Gallery() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const gallery = [
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
                          
                  
                                    <Link to="/gallery" className="nav-item nav-link active">
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

      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4
            class="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Gallery
          </h4>
        </div>
      </div>

    

      <div className="py-5 text-private-transportation">
        <p className=" wow fadeInUp " data-wow-delay="0.1s">
          At <strong> Baja blue </strong>, we’re committed to more than just transportation — we’re here to make your travel experience enjoyable and worry-free.
        </p>

        <p className=" wow fadeInUp " data-wow-delay="0.1s">
      Our team is made up of friendly, professional drivers, responsive support staff, and a hands-on management team, all working toward one goal: getting you to and from Los Cabos International Airport (SJD) in total comfort.
        </p>

          <p className=" wow fadeInUp " data-wow-delay="0.1s">
    We take pride in offering reliable, on-time service with a warm, welcoming attitude. From your first contact with us to the moment you reach your destination, we’re focused on making your journey smooth, safe, and pleasant.
        </p>
           <p className=" wow fadeInUp " data-wow-delay="0.1s">
  At <strong> Baja blue </strong>, your happiness is our destination.
        </p>
      </div>

      

  

     
        <div
          class="py-5 wow fadeInUp d-flex flex-wrap justify-content-center gap-2"
          data-wow-delay="0.1s"
        >
          <div class=" d-flex flex-wrap justify-content-center gap-2 " >
                         {gallery && gallery.map((img, index) => (
         
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
      



      
     
<Footer/>
   <ButtonWhatsapp/>
    </div>
  );
}
