import { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [apiError, setApiError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.subject) {
      errors.subject = "Subject is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    } else if (formData.message.length < 5) {
      errors.message = "Message must be at least 5 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      await submitForm();
    } else {
      setErrors(errors);
    }
  };

  const submitForm = async () => {
    try {
      const response = await fetch("https://cafeu-api.vercel.app/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setApiError(errorData.error || "Something went wrong");
      } else {
        const data = await response.json();
        console.log("Response from API:", data);
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setApiError("");
        setTimeout(() => setSubmissionStatus(""), 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setApiError("Server error, please try again later");
    }
  };

  return (
    <div className="contactUsPageContainer">
      <div className="contactUsPage">
        <div className="contactTitle">
          <h1>Contact Us</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        {submissionStatus === "success" && (
          <div className="succesMessage">Form submitted successfully</div>
        )}
        {apiError && <div className="errorMessage">{apiError}</div>}
        <form action="submit" className="form" onSubmit={handleSubmit}>
          <div className="userInput">
            <div className="textRow">
              <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="label"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="label"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
            </div>

            <div className="labelInput">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Write a Subject"
                className="label"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && (
                <small className="text-danger">{errors.subject}</small>
              )}
            </div>

            <div className="labelInput">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write a message"
                className="messagelabel"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </div>
            <button className="buttonInput" type="submit">
              Send
            </button>
          </div>
        </form>
        <div className="contactInfo">
          <div className="contactContainer">
            <h6>Call Us:</h6>
            <p>
              <span>+1-234-567-8900</span>
            </p>
          </div>

          <div className="contactContainer">
            <h6>Hours:</h6>
            <p>Mon-Fri: 11am - 8pm Sat-Sun: 9am - 10pm</p>
          </div>

          <div className="contactContainer">
            <h6>Our Location:</h6>
            <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
