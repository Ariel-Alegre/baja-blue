import React from 'react'

import { Link, useLocation } from "react-router-dom";
import AllTestimonios from "../components/AllTestimonios";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";

export default function Reviews() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 10);
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
                <a  href="https://www.google.com/maps?q=Batalla+de+Puebla,+1ro+de+Mayo,+23406+San+José+del+Cabo,+B.C.S.,+México" className="text-muted me-4"
                
                  target="_blank"
                        rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Our location
                </a>
                <a href="tel:+5216242302304" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +5216242302304
                </a>
                <a href="mailto:reservations@tigresstransport.com.mx" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  reservations@tigresstransport.com.mx
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
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
                <Link to="/vehicles" className="nav-item nav-link">
                  Our Fleet
                </Link>
                <Link to="/reviews" className="nav-item nav-link active">
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

      <AllTestimonios />

<Footer/>
<ButtonWhatsapp/>
    </div>
  );
}
