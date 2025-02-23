import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/contact-us");
        if (response.status === 200) {
          setContacts(response.data);
        }
      } catch (error) {
        console.error("Error fetching contact submissions:", error);
        setApiError(
          "Error fetching contact submissions. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/contact-us/${id}`,
      );
      if (response.status === 200) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== id),
        );
      }
    } catch (error) {
      console.error("Error deleting contact submission:", error);
      alert("Failed to delete contact submission. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="contact-dashboard">
      <div className="dashboard-header">
        <h2>Contact Submissions</h2>
      </div>

      {apiError && <div className="error-message">{apiError}</div>}

      <div className="table-responsive">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td data-label="Name">{contact.name}</td>
                  <td data-label="Email">{contact.email}</td>
                  <td data-label="Subject">{contact.subject}</td>
                  <td data-label="Message">
                    <div className="message-cell">{contact.message}</div>
                  </td>
                  <td data-label="Actions">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="delete-btn"
                      title="Delete contact"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No contact submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDashboard;
