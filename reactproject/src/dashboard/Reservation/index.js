import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Reservation.css";

const Reservation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/reservation");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError("Failed to fetch reservations. Please try again later.");
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/reservation/${id}`,
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((member) => member._id !== id));
      }
    } catch (error) {
      console.error("Error deleting reservation:", error);
      alert("Failed to delete reservation. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading reservations...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="reservation-dashboard">
      <div className="dashboard-header">
        <h1>Reservations Dashboard</h1>
      </div>

      <div className="table-responsive">
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Total Persons</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((member) => (
                <tr key={member._id}>
                  <td data-label="Date">
                    {new Date(member.date).toLocaleDateString()}
                  </td>
                  <td data-label="Time">{member.time}</td>
                  <td data-label="Name">{member.name}</td>
                  <td data-label="Phone">{member.phone}</td>
                  <td data-label="Total Persons">{member.totalPerson}</td>
                  <td data-label="Actions">
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="delete-btn"
                      title="Delete reservation"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No reservations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
