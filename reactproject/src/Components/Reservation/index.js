import { Button, Col, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

export default function Reservation() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    totalPerson: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateForm() {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.match(/^\d{3}-\d{4}-\d{4}$/))
      newErrors.phone = "Enter a valid phone number (xxx-xxxx-xxxx).";
    if (!formData.totalPerson || formData.totalPerson <= 0)
      newErrors.totalPerson = "Enter a valid number of people.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3001/reservation", formData);
        if (response.status === 201) {
          setSuccessMessage("🎉 Reservation saved successfully!");
          
          // ✅ Reset Form Inputs
          setFormData({
            date: "",
            time: "",
            name: "",
            phone: "",
            totalPerson: "",
          });

          setErrors({});

          // ✅ Alert User
          alert("✅ Reservation saved successfully!");

          // ✅ Hide Success Message After 3 Seconds
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      } catch (error) {
        console.error("Error saving reservation:", error);
        alert("❌ Failed to save reservation. Please try again.");
      }
    }
  }

  return (
    <>
      <div className="reservation">
        <div className="bookingTitle text-center pt-5 pb-3">
          <h1 className="display-1">Book A Table</h1>
          <h6 className="opacity-75 lead">
            Secure your seat and enjoy an unforgettable dining experience.
          </h6>
        </div>

        <section>
          <Container className="container w-50 py-5">
            {/* ✅ Show Success Message */}
            {successMessage && (
              <Alert variant="success" className="text-center">{successMessage}</Alert>
            )}

            <form className="bookingForm row row-gap-4 bg-white" onSubmit={handleSubmit}>
              <Col md={6} className="d-flex flex-column">
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <small className="text-danger">{errors.date}</small>}
              </Col>

              <Col md={6} className="d-flex flex-column">
                <label htmlFor="time">Time</label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <small className="text-danger">{errors.time}</small>}
              </Col>

              <Col md={6} className="d-flex flex-column">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </Col>

              <Col md={6} className="d-flex flex-column">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="xxx-xxxx-xxxx"
                  aria-label="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </Col>

              <Col md={12} className="d-flex flex-column">
                <label htmlFor="totalPerson">Total Person</label>
                <input
                  name="totalPerson"
                  type="number"
                  min="1"
                  value={formData.totalPerson}
                  onChange={handleChange}
                />
                {errors.totalPerson && <small className="text-danger">{errors.totalPerson}</small>}
              </Col>

              <Col md={12} className="d-flex flex-column">
                <Button type="submit" className="bookingBtn">
                  Book A Table
                </Button>
              </Col>
            </form>
          </Container>
        </section>
      </div>
    </>
  );
}
