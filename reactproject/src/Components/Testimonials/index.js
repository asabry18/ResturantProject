import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3001/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1,
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [testimonials]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div
          className="testimonials-slider"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <div className="rating">{renderStars(testimonial.rating)}</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.nationality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentTestimonial === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
