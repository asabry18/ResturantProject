import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [apiError, setApiError] = useState("");

  // Fetch the contact submissions when the component mounts.
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
      }
    };

    fetchContacts();
  }, []);

  // Remove a contact submission by ID.
  const handleDelete = async (id) => {
    try {
      // Replace with your backend endpoint for deleting a specific contact submission.
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

  return (
    <div className="dashboard-container">
      <h2>Contact Submissions</h2>
      {apiError && <div className="error-message">{apiError}</div>}
      <table className="crud-table">
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
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contact submissions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDashboard;
