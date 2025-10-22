import  React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages/Home';
import HowShuttel from './pages/HowShuttel';
import PrivateTransportation from './pages/PrivateTransportation';
import Login from './pages/Login';
import LargeGroups from './pages/LargeGroups';
import Gallery from './pages/Gallery';
import Test from './pages/Test';
import Destinations from './pages/Destinations';
import OurFleet from './pages/OurFleet';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import BookNow from './pages/BookNow';
import ReviewForm from './pages/ReviewForm';
import ReviewSuccess from './pages/ReviewSuccess';
import FormData from './pages/FormData';
import AboutUs from './pages/AboutUs';
import ReservateSuccess from "./pages/ReservateSuccess"

import PanelAdmin from './pages/PanelAdmin';
import Clientes from './pages/Reservates';
import Reservates from "./pages/Reservates";
function App() {



  return (
    <div>
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
         {/*  <Route path="/how-a-shuttle-works" element={<HowShuttel />} /> */}
          <Route path="/private-transportation" element={<PrivateTransportation />} />
      {/*     <Route path="/shared-shuttle" element={<SharedShutle />} /> */}
          <Route path="/large-groups" element={<LargeGroups />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/vehicles" element={<OurFleet />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact-us" element={<ContactUs />} />
         {/*  <Route path="/book-now" element={<BookNow />} /> */}
       <Route path="/about-us" element={<AboutUs />} /> 

          <Route path="/form-review" element={<ReviewForm />} />
          <Route path="/review-submitted" element={<ReviewSuccess />} />
          <Route path="/book-now" element={<FormData />} />

          <Route path="/reservate-success" element={<ReservateSuccess />} />


          <Route path="/login" element={<Login />} />




  <Route path="/admin" element={<PanelAdmin />}>
     <Route index  element={ <Reservates/>} />
  
  </Route>



          

          
          <Route path="/test" element={<Test />} />





          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
