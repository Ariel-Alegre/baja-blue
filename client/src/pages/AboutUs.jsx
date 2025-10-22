import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import { Image } from "antd";
import Footer from "../components/Footer";

export default function AboutUs() {

    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const [visible, setVisible] = useState(false);
  
    const openPreview = () => {
      setVisible(true); // Abrimos el preview
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


         <div class="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
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
                                        
                                  <Link to="/about-us" className="nav-item nav-link active">
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

    

           <div className="container-fluid steps bg-dark text-white py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="display-5 text-white">
        <span className="text-primary">Baja</span> Blue Transportation
      </h2>
      <p>
        We've designed a simple process to ensure a smooth and dependable travel experience, from your first contact to your final destination.
      </p>
    </div>
    <div className="row g-4 ">
      {[
  {
    title: "Step 1: Make Your Reservation",
    desc: "Book your ride directly through our website or contact us for personalized assistance. We're here to make the process easy and quick.",
    step: "01.",
  },
  {
    title: "Step 2: Choose Your Destination",
    desc: "Let us know where you want to go. Whether it's an airport transfer or exploring Baja California, we’ve got you covered.",
    step: "02.",
  },
  {
    title: "Step 3: Enjoy the Ride",
    desc: "Sit back, relax, and let our professional drivers take care of the rest. Enjoy a smooth, safe, and comfortable journey.",
    step: "03.",
  },
]
.map((item, idx) => (
        <div className="col-lg-4" key={idx}>
          <div className="steps-item p-4 bg-white text-dark rounded shadow-sm h-100">
            <h4  style={{color: "#000"}}>{item.title}</h4>
            <p style={{color: "#000"}}>{item.desc}</p>
            <div className="steps-number text-primary fw-bold">{item.step}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 <div className="container-fluid bg-light py-5">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-xl-6">
        <h1 className="display-5">Who We Are</h1>
        <p>
          At <strong>Baja blue</strong>, we provide premium transportation services across Baja California and nearby areas,
          including San José del Cabo. Our mission is to offer comfortable, safe, and reliable travel experiences that make every journey memorable.
        </p>

        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="border p-4 rounded shadow-sm bg-white">
              <img src="img/about-icon-1.png" alt="Vision" className="img-fluid mb-3" style={{ width: "50px" }} />
              <h5>Our Vision</h5>
              <p>
                To become the leading transportation service in Baja California, connecting travelers with the culture and beauty of the region.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border p-4 rounded shadow-sm bg-white">
              <img src="img/about-icon-2.png" alt="Mission" className="img-fluid mb-3" style={{ width: "50px" }} />
              <h5>Our Mission</h5>
              <p>
                To provide exceptional, safe, and tailored transportation services to meet the unique needs of every client.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4">
          With over <strong>17 years of experience</strong>, we’ve built a strong reputation for outstanding service. Whether you're exploring the vibrant cities of Baja California or relaxing on the tranquil beaches of San José del Cabo, we ensure you arrive in comfort and style.
        </p>

      </div>

      <div className="col-xl-6">
        <img src={require("../img/img-bajablue/auto-12.jpg")} alt="Clients" className="img-fluid rounded w-100 h-100 object-fit-cover" />
      </div>
    </div>
  </div>
</div>


<div className="container-fluid bg-white feature py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: "800px" }}>
      <h2 className="display-5 mb-3">Affordable Airport Transfers</h2>
      <p>
        Book in just 2 clicks. Our smart and streamlined reservation system guarantees speed, accuracy, and convenience. Your flight and hotel info are integrated directly into our system, monitored by our expert team.
      </p>
    </div>

    <div className="row g-4 align-items-center">
      <div className="col-xl-4">
        <ul className="list-unstyled">
          <li className="mb-4 d-flex align-items-start">
            <i className="fa fa-check fa-2x text-primary me-3"></i>
            <span>24/7 Phone Support</span>
          </li>
          <li className="mb-4 d-flex align-items-start">
            <i className="fa fa-check fa-2x text-primary me-3"></i>
            <span>Unlimited changes and free cancellations</span>
          </li>
        </ul>
      </div>

      <div className="col-xl-4 text-center">
        <Image.PreviewGroup
          items={[
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


          ]}
          preview={{ visible: visible, onVisibleChange: (value) => setVisible(value) }}
        >
          <Image
                       src={require("../img/img-bajablue/s.jpg")}

            className="img-fluid w-100 rounded shadow"
            style={{ objectFit: "cover" }}
            alt="Gallery"
          />
        </Image.PreviewGroup>

        <div className="col-12 py-2">
                   <Link
                 to='/gallery'
                     className="btn btn-primary w-100 py-2"
                   >
                     View more
                   </Link>
                 </div>
      </div>

      <div className="col-xl-4">
        <ul className="list-unstyled text-end">
          <li className="mb-4 d-flex justify-content-end align-items-center">
            <span className="me-3">Grocery stops upon request</span>
            <i className="fa fa-check fa-2x text-primary"></i>
          </li>
          <li className="mb-4 d-flex justify-content-end align-items-center">
            <span className="me-3">Best price guarantee</span>
            <i className="fa fa-check fa-2x text-primary"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  



     

      

       <Footer/>


        <ButtonWhatsapp/>


    </div>
    )
}