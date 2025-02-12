import React, { useState, useEffect } from "react";
import "../assets/css/Testimonials.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      nationality: "Los Angeles, CA",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      nationality: "San Diego, CA",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Wilson",
      nationality: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      rating: 4,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div
          className="testimonials-slider"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
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
