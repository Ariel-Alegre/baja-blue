import React from 'react'

import { Link, useLocation } from "react-router-dom";
import { Image } from 'antd';

import Accordion from 'react-bootstrap/Accordion';

import Alert from 'react-bootstrap/Alert';
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";
export default function PrivateTransportation() {

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const privatePhoto = [
    require("../img/Clientes/Cliente-6.jpg"),
    require("../img/Vehicles/vehicle-21.jpg"),
    require("../img/Vehicles/bg-slide.jpg"),
    require("../img/Vehicles/vehicles-6.jpg"),
    require("../img/Vehicles/vehicles-8.jpg"),
    require("../img/Vehicles/vehicles-15.jpg"),

    require("../img/Vehicles/vehicles-2.jpg"),
    require("../img/Vehicles/vehicles-4.jpg"),


    
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
                            className="dropdown-item active"
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
            <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Private Transportation</h4>
             
            </div>
        </div>
<div className="py-5 text-private-transportation">
    <h4  className=" wow fadeInDown" data-wow-delay="0.1s">Private Transportation</h4>
    <p className=" wow fadeInDown" data-wow-delay="0.1s">
    Tigress transport Private Transportation is the best way to travel to your accommodations, it is completely private, no waiting at the airport for your driver or waiting for your shuttle to fill.
    </p>

    <p className=" wow fadeInDown" data-wow-delay="0.1s">
    You will be greeted with a personalized sign by a private chauffeur and fresh cold beverages. There will not be a timeshare presentation, no sales pitch is tolerated.
    </p>

</div>
    
<div  class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s">

<Alert variant="info">
  <i className="fa fa-certificate me-2 text-primary"></i> Included in the price
  <br />
  <br />

  <span class="fa fa-check fa-1x"></span>
  No waiting time
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Directly to your destination, no stops 
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Toll roads
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Beers and waters
 
</Alert>

</div>

<div className= "">
<h3 class="text-center wow fadeInUp" data-wow-delay="0.1s">World-class private transportation service</h3>

<div class=" wow fadeInUp d-flex flex-wrap justify-content-center " >
{privatePhoto && privatePhoto.map((data, index) => (

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
  
  <div className="py-5">
  <p
  className="wow fadeInDown  text-private-transportation "
  data-wow-delay="0.1s"
>
  You will receive your transportation voucher and a sign with your personalized name or group name via email, your arriving flight, hotel, and home or condo information will be located on your voucher. On the right-hand side of the voucher, you will see your departure flight and your hotel pick-up time.
</p>

</div>


</div>

     

<div class="responsive-container py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="text-section">
    <h2 className="text-dark ">At your departure</h2>
    <p>
    There is no need to call our office; our reservation system will notify us
    </p>
    <p>
    of your scheduled departure date and pick up time.


    </p>
    <p>
    Regardless our contact information will be on your voucher
    </p>
    <p>
    including office number located in Cabo San Lucas.
    </p>
  </div>
  <div class="image-section">
    <img src={require("../img/Clientes/Cliente-10.jpg")} alt="Aeropuerto" />
  </div>
</div>


<div class="container-fluid banner py-5 wow fadeInUp" data-wow-delay="0.1s">

  <h2 className="text-center">We will accommodate your transportation needs directly to your doorstep</h2>
  <p className="text-center-width text-center text-private-transportation"> 
  Your chauffeur will be responsible for carrying your luggage to your condo or hotel. Stopping at the grocery store is welcomed as long as it has been pre-arranged; a convenience store stop is welcomed as long as it is kept to a minimum of 10 minutes and does not need to be pre-arranged.
  </p>
<Accordion className="py-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How much I will at the airport?</Accordion.Header>
        <Accordion.Body>
        Only the time that it takes the driver to move the vehicle from the parking lot to the authorized pick up area.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are grocery stops included in the price?</Accordion.Header>
        <Accordion.Body>
        Grocery stops are available for 30 minutes with a charge of 25 USD.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Why I should prefer private transfer instead of shared shuttle?</Accordion.Header>
        <Accordion.Body>
        If you want to make a stop, be only with your party, go directly to your hotel, have beers in your vehicle then we suggest booking a private transfer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What type of cars you use on private transfer?</Accordion.Header>
        <Accordion.Body>
        It depends on the size of your group and requirements, for large groups with a lot of luggage that stops for groceries we use a van, for smaller parties an SUV.
        </Accordion.Body>
      </Accordion.Item>
  
     
      
    </Accordion>
    </div>

      <Footer/>

<ButtonWhatsapp/>

        
 
    </div>
    )
}