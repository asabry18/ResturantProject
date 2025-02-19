import React, { useState, useEffect } from "react";
import axios from "axios";

const TestimonialDash = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    nationality: "",
    image: "",
    text: "",
    rating: "",
    date: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/testimonials");
        if (response.status === 200) {
          setTestimonials(response.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
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
  };

  const handleInsert = async () => {
    // Make sure that rating is converted to a number if needed
    const testimonialToSend = {
      ...newTestimonial,
      rating: Number(newTestimonial.rating),
    };

    try {
      // Wrap the testimonial object in an array as required by the backend
      const response = await axios.post("http://localhost:3001/testimonials", [
        testimonialToSend,
      ]);
      if (response.status === 201 || response.status === 200) {
        // Depending on your backend response, you might need to adjust this.
        // For example, if response.data contains {message, testimonials}, then:
        setTestimonials((prev) => [...prev, ...response.data.testimonials]);
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

  return (
    <>
      <h2>Testimonials</h2>
      <div className="crud-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nationality</th>
              <th>Text</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial._id}>
                <td>{testimonial.name}</td>
                <td>{testimonial.nationality}</td>
                <td>{testimonial.text}</td>
                <td>{testimonial.rating}</td>
                <td>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="bg-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-100 d-flex justify-content-center">
          <button onClick={() => setShowForm(!showForm)} className="my-4 px-3">
            {showForm ? "Cancel" : "Insert"}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="insert-form mt-4">
          <h2>Add New Testimonial</h2>
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Nationality"
            value={newTestimonial.nationality}
            onChange={(e) =>
              setNewTestimonial({
                ...newTestimonial,
                nationality: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newTestimonial.image}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, image: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Text"
            value={newTestimonial.text}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, text: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={newTestimonial.rating}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, rating: e.target.value })
            }
          />
          <input
            type="date"
            value={newTestimonial.date}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, date: e.target.value })
            }
          />
          <button onClick={handleInsert} className="mt-2 px-3">
            Add Testimonial
          </button>
        </div>
      )}
    </>
  );
};

export default TestimonialDash;
