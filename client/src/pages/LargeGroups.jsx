import React from 'react'

import { Link, useLocation } from "react-router-dom";
import { Image } from "antd";

import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";
export default function SharedShutle() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const largePhoto = [
    require("../img/Clientes/Cliente-11.jpg"),
    require("../img/Clientes/Cliente-12.jpg"),
    require("../img/Clientes/Cliente-13.jpg"),

    require("../img/Vehicles/vehicles-3.jpg"),
  

  


    
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
                          className="nav-link dropdown-toggle active"
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
                          <Link to="/large-groups" className="dropdown-item active ">
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

      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4
            class="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Affordable Group Transportation in Los Cabos
          </h4>
        </div>
      </div>

      <div class="container-aditional py-0">
        <div class="aditional-container">
          <i class="fas fa-users"></i>
          <div class="text-container">
            <h3>Family groups</h3>
            <p>Our services are professional, punctual, and dependable</p>
          </div>
        </div>
        <div class="aditional-container">
          <i class="fas fa-heart"></i>
          <div class="text-container">
            <h3>Weddings</h3>
            <p>Transportation planning, and an impeccable team of chauffeurs</p>
          </div>
        </div>
        <div class="aditional-container">
          <i class="fas fa-briefcase"></i>
          <div class="text-container">
            <h3>Corporate</h3>
            <p>Efficient, smooth, and convenient transportation</p>
          </div>
        </div>
      </div>

      <div className="py-5 text-private-transportation">
        <p className=" wow fadeInUp " data-wow-delay="0.1s">
          We at Tigress transport understand that our clients demand comfort, reliability,
          and timing to arrive at their destination. Planning for a family trip,
          a wedding or a corporate event can be a lot of stress. Our
          professional drivers will ensure that all runs smoothly.
        </p>

        <p className=" wow fadeInUp " data-wow-delay="0.1s">
          Our company is a proud family-owned and operated business. Our
          professionalism and expertise have allowed our business to grow
          rapidly as we pride ourselves to deliver the best service through our
          luxury fleet. Experienced and fully licensed drivers are committed to
          provide a safe and on-time journey to your desired destination.
        </p>

        <p className=" wow fadeInUp " data-wow-delay="0.1s">
          They are trained with the best knowledge of routes in and around{" "}
          <strong> San Jose del Cabo </strong>and{" "}
          <strong> Cabo San Lucas</strong>. We are flexible and able to
          customize our service according to your needs, whether that be for
          special events, tour rides, airport transfers, and more.
        </p>
      </div>

      <div className=" wow fadeInUp vehicles-container" data-wow-delay="0.1s">
        <div className="type-vehicles">
          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttle-suburban-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 ">SUVs</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 5 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>

          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttle-groups-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 ">Toyota Hiace</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 10 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>

          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttle-vans-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 ">Ford Transit</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 11 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>
        </div>

      
        <div className="type-vehicles">
          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttle-1-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 "> Mercedes Sprinter Mid-Size</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 16 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>

          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttle-van-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 ">
              Mercedes Sprinter Large-Size</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 19 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>

          <div className="d-flex gap-2 ">
            <div>
              <img
                src="https://caboairportshuttle.net/wp-content/uploads/2021/02/cabo-airport-shuttles-150x150.jpg"
                alt=""
              />
            </div>
            <div>
              <strong class="mb-2 ">Buses</strong>

              <p class="mb-2  ">
                <i class="fas fa-users"></i> For up to 52 people
              </p>
              <p class="mb-2">
                <i class="fa fa-check-circle text-primary me-1"></i> Brand new
                vehicles
              </p>
              <p class="mb-0">
                <i class="fa fa-check-circle text-primary me-1"></i> Bilingual
                chauffeurs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <Alert variant="success">
          <i className="fa fa-certificate me-2 text-primary"></i> 
          Get A Free, No-Obligation Quote, <Link to={"/contact-us"}>contact us</Link>, we respond in a few minutes.
        </Alert>
      </div>

      <div className="">
        <h3 class="text-center wow fadeInUp" data-wow-delay="0.1s">
          World-class transportation service
        </h3>
        <div class=" wow fadeInUp d-flex flex-wrap justify-content-center " >
{largePhoto && largePhoto.map((data, index) => (

<div className="wow fadeInUp" data-wow-delay={`0.${index+1}s`}>


<Image
    width={400}
    height={300}
    src={data}
    style={{ objectFit: "cover" }}
    
    
    />
    </div>
))}
</div>
          <div className="py-2" >
            <p
              className="wow fadeInDown text-center text-private-transportation"
              data-wow-delay="0.1s"
            >
          Our round-the-clock service is reliable and professional as you can always depend on us to be punctual.
            </p>
            <br />
            <p
              className="wow fadeInDown text-center  text-private-transportation"
              data-wow-delay="0.1s"
            >
         No matter if your group is large or small, we have the ideal bus or vehicle for your journey. Our coaches and minibuses go all over Los Cabos and its surroundings.
            </p>
          </div>
      </div>

      <div class="responsive-container py-5 wow fadeInUp" data-wow-delay="0.1s">


      <div class="image-section">
          <img
            src={require("../img/Clientes/Cliente-3.jpg")}
            alt="Aeropuerto"
          />
        </div>
        <div class="text-section">
          <h2 className="text-dark ">
          Why choose us?</h2>
          <p className="text-dark ">
            <strong>

          1.  Experienced & licensed drivers
            </strong>
          </p>
          <p className="text-dark ">
            <strong>

            2. Family-owned company
            </strong>
          </p>
          <p className="text-dark ">
            <strong>

            3. Flexible services
            </strong>
          </p>
          <p className="text-dark ">
            <strong>

            4. Exceptional experience at affordable prices
            </strong>
          </p>

          <p className="text-dark ">
            <strong>

            5. Vehicles immaculately maintained
            </strong>
          </p>
        </div>
       
      </div>

      <div
        class="container-fluid banner py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h2 className="text-center">
        Frequently Asked Questions
        </h2>
     
        <Accordion defaultActiveKey="0" className="py-2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How can I book if my group has different people arriving and departing?
            </Accordion.Header>
            <Accordion.Body>
            Please send us your information and we will give you a good deal for multiple transfers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
            How do I make the payment?
            </Accordion.Header>
            <Accordion.Body>
            The payment can be made on arrival in cash or with a credit card or if you wish to pay in advance, we can send you a link and you can pay online.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I get a quote?
            </Accordion.Header>
            <Accordion.Body>
            Please send us the information of your group by clicking contact us or send us an email to sales@caboairportshuttle.net.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
        Do I need to call to confirm the transfer
            </Accordion.Header>
            <Accordion.Body>
            If you wish, but we will confirm a day before your transfer via email or text message.
            </Accordion.Body>
          </Accordion.Item>
      
        </Accordion>
      </div>

  <Footer/>
<ButtonWhatsapp/>
    </div>
  );
}
