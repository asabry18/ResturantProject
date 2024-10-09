import React, { useState } from "react";

function Contact() {
  // States for form fields and error messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "" || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Phone validation (numeric check)
    const phoneRegex = /^[0-9]+$/;
    if (
      formData.phone.trim() === "" ||
      !phoneRegex.test(formData.phone) ||
      formData.phone.length < 10
    ) {
      newErrors.phone = "Valid phone number is required";
      isValid = false;
    }

    // Location validation
    if (formData.location.trim() === "") {
      newErrors.location = "Location is required";
      isValid = false;
    }

    // Message validation
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      setSuccessMessage("Form Submitted Successfully!");
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <div className="row mx-auto my-5 CContactUsSection">
        <div className="col-12 col-md-8">
          <div className="container">
            <div className="row py-3">
              <div>
                <h5 className="text-center CallButton">Contact Us</h5>
              </div>
            </div>
            <div>
              <h3 className="text-center">Please Get In Touch With Us</h3>
            </div>

            <div className="container">
              <div className="row">
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa fa-user icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name*"
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-envelope icon CFormIcon"></i>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your E-mail*"
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-phone icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your Phone*"
                        />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-location-dot icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Your Location*"
                        />
                        {errors.location && <small className="text-danger">{errors.location}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control textarea"
                          rows="3"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Comment*"
                        ></textarea>
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center mt-2">
                      <button type="submit" className="main-btn">
                        Send Message
                      </button>
                      {successMessage && (
                        <div id="inline-alert" className="CAlert mt-2">
                          {successMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 CGoogleMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537851.770682577!2d86.97732224861059!3d22.706239176045763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2seg!4v1725790908528!5m2!1sen!2seg"
            width="300"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
