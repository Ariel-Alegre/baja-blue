import { Link } from "react-router-dom";
import { Image } from 'antd';

import Accordion from 'react-bootstrap/Accordion';

import Alert from 'react-bootstrap/Alert';
export default function SharedShutle() {
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

        <div class="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link to="/" class="navbar-brand p-0">
                                              <img src="img/Logo.jpg" alt="Logo"/> 

                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link">Home</Link>

                            <div class="nav-item dropdown">
                                <Link href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">How a Shuttle Works?</Link>
                                <div class="dropdown-menu m-0">
                                    <Link to="/how-a-shuttle-works" class="dropdown-item">How a Shuttle Works?</Link>
                                    <Link to="/private-transportation" class="dropdown-item ">Private Transportation</Link>
                                    <Link to="/shared-shuttle" class="dropdown-item active">Shared Shutttle</Link>
                                    <Link to="/large-groups" class="dropdown-item ">Large Groups</Link>

                                    <Link href="404.html" class="dropdown-item">Gallery</Link>
                                </div>
                            </div>
                            <Link to="/destinations" class="nav-item nav-link ">Destinations</Link>

                            <Link to="/vehicles" class="nav-item nav-link">Our Fleet</Link>
                            <Link to="/reviews" class="nav-item nav-link">Our Reviews</Link>

                            
                         
                            <div class="nav-item dropdown">
                                <Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contact Us</Link>
                                <div class="dropdown-menu m-0">
                                <Link to="/contact-us" class="dropdown-item">Contact Us</Link>

                                    <Link href="about.html" class="dropdown-item">About us</Link>
                          
                                </div>
                        </div>
                        </div>
                        <Link to="/book-now"  class="btn btn-primary rounded-pill py-2 px-4">Book Now</Link>


                    </div>
                </nav>
            </div>
        </div>

        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Shared Shuttle in Los Cabos</h4>
             
            </div>
        </div>
<div className="py-5 text-private-transportation">
    <h4  className=" wow fadeInDown" data-wow-delay="0.1s">Shared Shuttle in Los Cabos</h4>
    <p className=" wow fadeInDown " data-wow-delay="0.1s">
    Shared Shuttle Transportation is the least expensive way to travel from San Jose del Cabo International Airport (SJD) to all the resorts located within Los Cabos. Cabo Airport Shuttle offers shared rides to and from your resort destination, the prices you will view in our website are per person.
    </p>



</div>
    
<div  class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s">

<Alert variant="info">
  <i className="fa fa-certificate me-2 text-primary"></i> Included in the price
  <br />
  <br />

  <span class="fa fa-check fa-1x"></span>
  30-45 waiting time
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Toll roads
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Waters 
  {" "}
  <span class="fa fa-check fa-1x"></span>
  Cheapest way to travel 
  <span class="fa fa-check fa-1x"></span>
  Car and booster seats on request

 
</Alert>

</div>

<div className= "">
<h3 class="text-center wow fadeInUp" data-wow-delay="0.1s">World-class transportation service</h3>
<div class="py-5 wow fadeInUp d-flex flex-wrap justify-content-center gap-2" data-wow-delay="0.1s">


<Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  <div className="">
  <p
  className="wow fadeInDown  text-private-transportation"
  data-wow-delay="0.1s"
>
There are no other unscheduled stops such as convenience stores, grocery stores including Wal-Mart, Costco, etc.; Depending on the number of passengers that have reserved a seat on your shuttle, we will determine what vehicle will be assigned.
</p>
<br />
<p
  className="wow fadeInDown  text-private-transportation"
  data-wow-delay="0.1s"
>
If you are traveling with children or babies in car seats, please take into account when booking, that you will be occupying another seat and you will have to pay for another passenger.
</p>
  </div>
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
    including the office number located in Cabo San Lucas.
    </p>
  </div>
  <div class="image-section">
    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="Aeropuerto" />
  </div>
</div>


<div class="container-fluid banner py-5 wow fadeInUp" data-wow-delay="0.1s">

  <h2 className="text-center">Shared shuttle is the least expensive way to travel</h2>
  <p className="text-center-width text-center text-private-transportation" > 
  When reserving your shared shuttle transportation, please note that we do not transport to private homes, villas or condos. The driver will drop you off at the nearest hotel.
  </p>
  <p className="text-center-width text-center text-private-transportation" > 
  Departures on shared shuttles may be subject to change to a later or an early pickup time, depending on the workload and scheduling.
  </p>
<Accordion defaultActiveKey="0" className="py-2" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>How much time will I at the airport?</Accordion.Header>
        <Accordion.Body>
        There could be a 30 minute up to a 45-minute wait at the airport, please note that the time starts when you arrive at the umbrella #5 and you are met by our representative.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are grocery stops included in shared shuttles?</Accordion.Header>
        <Accordion.Body>
        Grocery stops only apply in private transfers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Why should I prefer a shared shuttle instead of private transfer?</Accordion.Header>
        <Accordion.Body>
        If you are traveling on a low budget, want to meet other people, it’s your first time in Cabo and wants to see other hotels then we suggest a shared transfer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What type of cars you use on shared shuttles?</Accordion.Header>
        <Accordion.Body>
        It depends on the availability and the number of passengers that will share the vehicle with you but we usually use vans.
        </Accordion.Body>
      </Accordion.Item>
  
     
      
    </Accordion>
    </div>

        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <div class="footer-item">
                                <h4 class="text-white mb-4">About Us</h4>
                                <p class="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            </div>
                            <div class="position-relative">
                                <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                                <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Quick Links</h4>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> About</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Cars</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Car Types</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Team</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Business Hours</h4>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Mon - Friday:</h6>
                                <p class="text-white mb-0">09.00 am to 07.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Saturday:</h6>
                                <p class="text-white mb-0">10.00 am to 05.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Vacation:</h6>
                                <p class="text-white mb-0">All Sunday is our vacation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <a href="#"><i class="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="tel:+012 345 67890"><i class="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="tel:+012 345 67890" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a>
                            <div class="d-flex">
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-facebook-f text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-twitter text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-instagram text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i class="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-body">
                        Designed By <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   

        
 
    </div>
    )
}