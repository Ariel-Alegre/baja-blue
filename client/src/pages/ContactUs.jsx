import React from "react";

import { Link, useLocation } from "react-router-dom";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";

export default function ContactUs() {
  const { pathname } = useLocation();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://server-bajablue-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage(data.error || "Something went wrong.");
        setResponseMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again.");
      setResponseMessage("");
    }
  };

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
                                        <Link to="/contact-us" className="nav-item nav-link active">
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
            Contact Us
          </h4>
        </div>
      </div>







  <section class="contact-section py-5 bg-light">
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="text-primary display-5 fw-bold">Let's Get in Touch</h2>
      <p class="text-muted">We're available 24/7 to answer your questions and assist you.</p>
    </div>

    <div class="row gy-5">
      <div class="col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100 text-center p-4">
          <i class="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
          <h5 class="mb-2">Address</h5>
          <p class="mb-0">
            <a href="https://www.google.com/maps/place/37WC%2BRV6,+San+Jos%C3%A9+del+Cabo,+B.C.S.,+México" target="_blank" class="text-decoration-none text-dark">
             Fracc. Villas de cortes, calle Santander. Lote 20 mza. 60  Cp. 23427. San jose del cabo. B.C.S.
            </a>
          </p>
        </div>
      </div>

      <div class="col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100 text-center p-4">
          <i class="fas fa-envelope fa-2x text-primary mb-3"></i>
          <h5 class="mb-2">Email</h5>
          <p class="mb-0">
            <a href="mailto:bajabluetransportation@gmail.com" class="text-decoration-none text-dark">
              bajabluetransportation@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div class="col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100 text-center p-4">
          <i class="fas fa-phone fa-2x text-primary mb-3"></i>
          <h5 class="mb-2">Call Us</h5>
          <p class="mb-0">
            <a href="tel:+526241291126" class="text-decoration-none text-dark">
      
              +52 6 241 291 126
            </a>
          </p>
        </div>
      </div>

      <div class="col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100 text-center p-4">
          <i class="fas fa-code fa-2x text-primary mb-3"></i>
          <h5 class="mb-2">Developer</h5>
          <p class="mb-0">
            <a href="https://elaritech.com/" target="_blank" class="text-decoration-none text-dark">
              elaritech.com
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
    <div class="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bg-secondary p-5 rounded">
                <h4 class="text-primary mb-4">Send Your Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "160px" }}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-light w-100 py-3"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {responseMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {responseMessage}
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>


      <div class="col-lg-6 mt-4 mt-lg-0">
        <div class="ratio ratio-4x3 rounded shadow-sm">
      <iframe
  className="rounded w-100"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.023005706937!2d-109.70610852492184!3d23.060506479139515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af51138e5112fd%3A0x1e97aa60a1e68161!2s37WC%2BRV6%2C%20San%20Jos%C3%A9%20del%20Cabo%2C%20B.C.S.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sar!4v1727800000000!5m2!1ses!2sar"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />

      <ButtonWhatsapp />
    </div>
  );
}
