import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        
      <div className="container-fluid footer py-5 wow fadeIn  " data-wow-delay="0.2s">
      <div className="container py-5  ">
        <div className="row g-5">
    
          {/* Sección de información de contacto */}
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a 
             href="https://www.google.com/maps/place/37WC%2BRV6,+San+Jos%C3%A9+del+Cabo,+B.C.S.,+México"
              target="_blank"
              rel="noopener noreferrer"
             >


                <i className="fa fa-map-marker-alt me-2"></i> Los Cabos, B.C.S, México
              </a>
              <a href="mailto:bajabluetransportation@gmail.com"
                  target="_blank"
              rel="noopener noreferrer"
              >
                <i className="fas fa-envelope me-2"></i> bajabluetransportation@gmail.com
              </a>
              <a href="tel:+526241291126">
                <i className="fas fa-phone me-2"></i> ( +52 ) 6 241 291 126
              </a>

              <a href="https://wa.me/+526241291126?text=Hello!%20I%20would%20like%20more%20information%20about%20your%20transportation%20services." className="mb-3" target="_blank" rel="noopener noreferrer">
 <BsWhatsapp className=" me-2"/> ( +52 ) 6 241 291 126
</a>
              <div className="d-flex">
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="https://www.facebook.com/profile.php?id=61576103212358"
                
                    target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
               {/*  <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-0" href="">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a> */}
              </div>
            </div>
          </div>
    
          {/* Sección "About Us" */}
        {/*   <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">About Us</h4>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> About
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Private Transportation
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Large Groups
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Gallery
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Contact us
              </a>
      
            </div>
          </div> */}
    
          {/* Sección de "Menu" */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Menu</h4>
              <Link to="/">
                <i className="fas fa-angle-right me-2"></i> Home
              </Link>
              <Link to="/destinations">
                <i className="fas fa-angle-right me-2"></i> Destinations
              </Link>
               <Link to="/gallery">
                <i className="fas fa-angle-right me-2"></i> Gallery
              </Link>

                   <Link to="/about-us">
                <i className="fas fa-angle-right me-2"></i> About us
              </Link>

                <Link to="/contact-us">
                <i className="fas fa-angle-right me-2"></i> Contact us
              </Link>
          
              <a href="https://elaritech.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-angle-right me-2"></i> Contact the developer
              </a>
            </div>
          </div>
    
          {/* Sección de créditos con logo de elaritech */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Developed by</h4>
              <a href="https://elaritech.com" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                <img 
                  src={require("../img/ELARITECH.jpg")}
                  alt="elaritech logo" 
                  style={{ width: "30px", height: "30px", marginRight: "10px" }} 
                />
                <span>elaritech.com</span>
              </a>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    
    
          <div className="container-fluid copyright py-4">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center text-md-start mb-md-0">
                  <span className="text-body">
                      <i className="fas fa-copyright text-light me-2"></i> Baja Blue Transportation
                      
                    , All right reserved.
                  </span>
                </div>
                <div className="col-md-6 text-center text-md-end text-body">
                  Designed By{" "}
                  <a
                    className="border-bottom text-white"
                    href="https://elaritech.com"
                  >
                    ELARITECH
                  </a>
                </div>
              </div>
            </div>
          </div>
          </>
    )
}