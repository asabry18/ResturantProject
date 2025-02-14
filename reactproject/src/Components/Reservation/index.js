import { Button, Col, Container } from "react-bootstrap";
import "../../assets/css/reservation.css";
import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    totalPerson: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateForm() {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone)
      newErrors.phone = "Enter a valid phone number (xxx-xxxx-xxxx).";
    if (!formData.totalPerson || formData.totalPerson <= 0)
      newErrors.totalPerson = "Enter a valid number of people.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("reservation", JSON.stringify(formData));
      alert("Reservation saved successfully!");
      setFormData({
        date: "",
        time: "",
        name: "",
        phone: "",
        totalPerson: "",
      });
      setErrors({});
    }
  }

  return (
    <>
      <div className="reservation">
        <div className="bookingTitle text-center pt-5 pb-3">
          <h1 className="display-1">Book A Table</h1>
          <h6 className="opacity-75 lead">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </h6>
        </div>

        <section>
          <Container className="container w-50 py-5">
            <form
              className="bookingForm row row-gap-4 bg-white"
              onSubmit={handleSubmit}
            >
              <Col md={6} className="d-flex flex-column">
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <small className="text-danger">{errors.date}</small>
                )}
              </Col>
              <Col md={6} className="d-flex flex-column">
                <label htmlFor="time">Time</label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && (
                  <small className="text-danger">{errors.time}</small>
                )}
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
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
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
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </Col>
              <Col md={12} className="d-flex flex-column">
                <label htmlFor="totalPerson">Total Person</label>
                <input
                  name="totalPerson"
                  type="number"
                  value={formData.totalPerson}
                  onChange={handleChange}
                />
                {errors.totalPerson && (
                  <small className="text-danger">{errors.totalPerson}</small>
                )}
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
