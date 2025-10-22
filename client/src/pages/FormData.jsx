import React, { useState, useEffect } from "react";



import {useNavigate, useLocation} from 'react-router-dom';

const FormData = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
    currency: "",
    departureDate: "",
    departureTime: "",
    country: "",
    from: "",
    isReturn: "",
    returnDate: "",
    returnTime: "",
    to: "",
    vehicles: "",
    price: "",
    flightNumber: "",
    airline: "",
    paymentMethod: "",
  });

  const [storageForm, setStorageForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("formData")) || {};
    setStorageForm(res);
  }, []);

  useEffect(() => {
    setData({
      ...data,
      currency: storageForm?.currency || "",
      departureDate: storageForm?.departureDate || "",
      departureTime: storageForm?.departureTime || "",
      from: storageForm?.from || "",
       isReturn: storageForm?.isReturn === true || null,

      returnDate: storageForm?.returnDate || "",
      returnTime: storageForm?.returnTime || "",
      to: storageForm?.to || "",
      vehicles: storageForm?.vehicles || "",
      price: storageForm?.price || "",
    });
  }, [storageForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Activar estado de cargando
    try {
      const response = await fetch(
        "https://server-bajablue-production.up.railway.app/api/reservate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
   navigate("/reservate-success")
   
    
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al guardar la reserva. Intente nuevamente.");
    } finally {
      setLoading(false); // Desactivar estado de cargando
        localStorage.removeItem("formData")
    }
  };


  const back = () => {
    window.history.back()
    localStorage.removeItem("formData");
  }
  return (
    <div className="form-payment-container">
      <button
        type="button"
        className="back-button"
        onClick={back}
      >
        Go Back
      </button>
      <div className="form-title">
        <strong>Datos personales</strong>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={data.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="airline">Airline (optional):</label>
            <input
              type="text"
              id="airline"
              name="airline"
              value={data.airline}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="flightNumber">Flight Number (optional):</label>
            <input
              type="text"
              id="flightNumber"
              name="flightNumber"
              value={data.flightNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="comment">Comments (optional):</label>
            <textarea
              id="comment"
              name="comment"
              value={data.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="button-container">
          <button
            className="btn btn-primary w-100 py-2"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Book Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
