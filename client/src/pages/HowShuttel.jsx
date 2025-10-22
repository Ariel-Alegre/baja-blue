import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
export default function HowShuttel() {
    return (
        <div>

       

        <div class="container-fluid topbar bg-secondary d-none d-xl-block w-100">
            <div class="container">
                <div class="row gx-0 align-items-center" style={{height: "45px"}}>
                    <div class="col-lg-6 text-center text-lg-start mb-lg-0">
                        <div class="d-flex flex-wrap">
                            <a href="#" class="text-muted me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                            <a href="tel:+01234567890" class="text-muted me-4"><i class="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                            <a href="mailto:example@gmail.com" class="text-muted me-0"><i class="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end">
                        <div class="d-flex align-items-center justify-content-end">
                            <a href="#" class="btn btn-light btn-sm-square rounded-circle me-3"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="btn btn-light btn-sm-square rounded-circle me-3"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="btn btn-light btn-sm-square rounded-circle me-3"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="btn btn-light btn-sm-square rounded-circle me-0"><i class="fab fa-linkedin-in"></i></a>
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
                                    <Link href="/how-a-shuttle-works" class="dropdown-item active">How a Shuttle Works?</Link>
                                    <Link to="/private-transportation" class="dropdown-item">Private Transportation</Link>

                                    <Link to="/shared-shuttle" class="dropdown-item">Shared Shutttle</Link>
                                    <Link to="/large-groups" class="dropdown-item ">Large Groups</Link>

                                    <Link to="/gallery" class="dropdown-item">
                      Gallery
                    </Link>
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
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Tigress transport, you best option in transportation</h4>
                
            </div>
        <div class="container-fluid  py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="counter-item text-center">
                            <div class="counter-item-icon mx-auto">
                                <i class="fas  text-white fa-2x">1</i>
                            </div>
                            <div class="counter-counting my-3">
                                <h4 class="text-white " >Book your shuttle online</h4>
                            </div>
                            <span class="text-white ">Online, over the phone or sending us an email</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="counter-item text-center">
                            <div class="counter-item-icon mx-auto">
                                <i class="fas  text-white fa-2x">2</i>

                            </div>
                            <div class="counter-counting my-3">
                                <h4 class="text-white " >Confirmation voucher</h4>
                            </div>
                            <span class="text-white ">We will send you a voucher with the transfer details</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="counter-item text-center">
                            <div class="counter-item-icon mx-auto">
                                <i class="fas  text-white fa-2x">3</i>
                               
                            </div>
                            <div class="counter-counting my-3">
                                <h4 class="text-white " >At your arrival</h4>
                            </div>
                            <span class="text-white ">The driver will be holding a sign with your name on it</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="counter-item text-center">
                            <div class="counter-item-icon mx-auto">
                                <i class="fas  text-white fa-2x">4</i>

                            </div>
                            <div class="counter-counting my-3">
                                <h4 class="text-white " >At your departure</h4>
                            </div>
                            <span class="text-white ">The driver will ask for you at the lobby of your hotel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

  
        <div class="container-fluid featureHow py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
                    <p class="mb-0"><span class="text-primary">Tigress transport</span> is a low-cost transportation company with private and shared transfers from and to <strong> Los Cabos International Airport (SJD).</strong>
                    </p>
                </div>
                   
                    <div class="" data-wow-delay="0.2s">
                        <img src="https://caboairportshuttle.net/wp-content/uploads/2023/05/cabo-airport-shuttle-couon-scaled.jpg?id=4971" class="img-fluid w-100" style={{objectFit: "cover"}} alt="Img"/>
                    
                    </div>
                   
                  
               
            </div>
        </div>

    
        
        <div class="py-5">
            <div class="d-flex flex-wrap gap-4 justify-content-center align-items-center">
                <div class="d-flex gap-2 flex-wrap">
                    <div>
                        <div class="text-center">
                            <img src="img/about-img-1.jpg" class="img-fluid rounded w-100" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div class="rounded ">
                            <strong class="mb-2 "> Private transportation</strong>
                            <br/>
                            <br/>

                            <p class="mb-2" ><i class="fa fa-check-circle text-primary me-1"></i> Price per vehicle</p>
                            <p class="mb-2"><i class="fa fa-check-circle text-primary me-1"></i>  No waiting time</p>
                            <p class="mb-0"><i class="fa fa-check-circle text-primary me-1"></i> Grocery stop on request</p>
                            <a href="/" class="mb-0">{"More information >"}

                            </a>

                        </div>
                    </div>
                </div>

                <div class="d-flex gap-2 flex-wrap">
                    <div>
                        <div class="text-center">
                            <img src="img/about-img-1.jpg" class="img-fluid rounded w-100" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div class="rounded">
                            <strong class="mb-2"> Shared transfersn</strong>
                            <br/>
                            <br/>

                            <p class="mb-2"><i class="fa fa-check-circle text-primary me-1"></i>Price per person</p>
                            <p class="mb-2"><i class="fa fa-check-circle text-primary me-1"></i> Waters and toll roads</p>
                            <p class="mb-0"><i class="fa fa-check-circle text-primary me-1"></i>  Cheapest way to travel</p>
                        <a href="/" class="mb-0">{"More information >"}

                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
 




        <div class="container-fluid banner py-5 wow zoomInDown" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="banner-item rounded">
                    <img src="img/banner-1.jpg" class="img-fluid rounded w-100" alt=""/>
                    <div class="banner-content">
                        <h2 class="text-primary">Rent Your Car</h2>
                        <h1 class="text-white">Interested in Renting?</h1>
                        <p class="text-white">Don't hesitate and send us a message.</p>
                        <div class="banner-btn">
                            <a href="#" class="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatchApp</a>
                            <a href="#" class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>





<div class="bg-light py-5 text-justify margin-auto d-flex gap-5 justify-content-center flex-wrap">
    <div>
        <div class="img-container-where">
            <img src="https://caboairportshuttle.net/wp-content/uploads/2020/07/arrival-airplane-e1596279383442.jpeg#main"  alt=""/>
            <img src="https://caboairportshuttle.net/wp-content/uploads/2020/07/luggage-airport-shuttle-e1596279368272.jpg#main"alt=""/>

        </div>
        <div class="img-container-where">
            <img src="https://caboairportshuttle.net/wp-content/uploads/2020/07/time-share-e1596279340301.jpg#main"  alt=""/>
            <img src="https://caboairportshuttle.net/wp-content/uploads/2020/07/glass-doors-airport.jpg#main"  alt=""/>

        </div>
    </div>
    <div style={{textAlign: "center"}}>

        <h4>Where to find us at the airport?</h4>
        
        <div>
            <strong>1.  Arrive at the airport</strong>
            <p>After your arrival go to the immigration desk.</p>
        </div>
        <div>
            <strong>2.   Luggage & Customs</strong>
            <p>Pick up your luggage and go to customs.</p>
        </div>
        <div>
            <strong>3. Timeshare people</strong>
            <p>Don’t stop with timeshare people, we are not associated with any of them at the airport.</p>
        </div>
        <div>
            <strong>4. Groups exit</strong>
            <p>Go outside the airport through the sliding glass doors.</p>
        </div>
        <div>
            <strong>5. Umbrella #5</strong>
            <p>We will be waiting for you with your sign at umbrella number 5.</p>
        </div>
    </div>
</div>

<div class="container-fluid banner py-5 wow fadeInUp" data-wow-delay="0.1s">

  <h2>Frequently Asked Questions</h2>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where do I meet the driver?</Accordion.Header>
        <Accordion.Body>
        The airport representative will be waiting for you under the umbrella #5 and will take you to your driver.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I request a car seat for my baby?</Accordion.Header>
        <Accordion.Body>
        Yes, car seats have a cost of 5 dollars and booster seats 3 dollars. The price covers the round trip service.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is your candellation policy?</Accordion.Header>
        <Accordion.Body>
            <p>1. We will not impose any charges on cancellations with a 24 hour written notice.</p>
            <p>2. Cancellations between 12 hours will be subjected to a 50 % services charge.</p>
            <p>3. If less than 12 hours cancellation written notice or failure to report on the date of arrival or departure will result in a 100% cancellation fee.</p>
            <p>
                <strong>No Show terms: </strong> No show on the date of arrival or departure will be considered a cancellation and is not refundable, 2 hours after the arrival time and 20 min after the departure pick up time.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>When do I pay?</Accordion.Header>
        <Accordion.Body>
        You can pay in cash or credit card on arrival.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What happens if my flight is delayed or cancelled?</Accordion.Header>
        <Accordion.Body>
        We monitor the arrival flights (not departure) of all our clients in real time; if any delays or cancellations occur, we will change your reservation without any extra charge.
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