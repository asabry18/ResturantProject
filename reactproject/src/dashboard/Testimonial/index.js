import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faTimes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Testimonial.css";

const TestimonialDash = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    nationality: "",
    image: "",
    text: "",
    rating: "",
    date: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/testimonials");
      if (response.status === 200) {
        setTestimonials(response.data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setError("Failed to load testimonials. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/testimonials/${id}`,
        );
        if (response.status === 200) {
          setTestimonials((prev) =>
            prev.filter((testimonial) => testimonial._id !== id),
          );
        }
      } catch (error) {
        console.error("Error deleting testimonial:", error);
        alert("Failed to delete testimonial. Please try again.");
      }
    }
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    const testimonialToSend = {
      ...newTestimonial,
      rating: Number(newTestimonial.rating),
    };

    try {
      const response = await axios.post("http://localhost:3001/testimonials", [
        testimonialToSend,
      ]);
      if (response.status === 201 || response.status === 200) {
        await fetchTestimonials();
        setShowForm(false);
        setNewTestimonial({
          name: "",
          nationality: "",
          image: "",
          text: "",
          rating: "",
          date: "",
        });
      }
    } catch (error) {
      console.error("Error adding new testimonial:", error);
      alert(
        "Failed to add new testimonial. Please check your input and try again.",
      );
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="testimonial-dashboard">
      <div className="dashboard-header">
        <h2>Testimonials Management</h2>
        <button
          className={`toggle-form-btn ${showForm ? "active" : ""}`}
          onClick={() => setShowForm(!showForm)}
        >
          <FontAwesomeIcon icon={showForm ? faTimes : faPlus} />
          {showForm ? " Cancel" : " Add New"}
        </button>
      </div>

      {showForm && (
        <form className="testimonial-form" onSubmit={handleInsert}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Enter name"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                required
                placeholder="Enter nationality"
                value={newTestimonial.nationality}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    nationality: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                placeholder="Enter image URL"
                value={newTestimonial.image}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    image: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Rating (1-5)</label>
              <input
                type="number"
                required
                min="1"
                max="5"
                placeholder="Enter rating"
                value={newTestimonial.rating}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    rating: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                required
                value={newTestimonial.date}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, date: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Testimonial Text</label>
            <textarea
              required
              placeholder="Enter testimonial text"
              value={newTestimonial.text}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, text: e.target.value })
              }
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Testimonial
          </button>
        </form>
      )}

      <div className="table-responsive">
        <table className="testimonial-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Nationality</th>
              <th>Testimonial</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <tr key={testimonial._id}>
                  <td data-label="Name">{testimonial.name}</td>
                  <td data-label="Nationality">{testimonial.nationality}</td>
                  <td data-label="Testimonial">
                    <div className="testimonial-text">{testimonial.text}</div>
                  </td>
                  <td data-label="Rating">
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className="star-icon"
                        />
                      ))}
                    </div>
                  </td>
                  <td data-label="Actions">
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="delete-btn"
                      title="Delete testimonial"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No testimonials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestimonialDash;
