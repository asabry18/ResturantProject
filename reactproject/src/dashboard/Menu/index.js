import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faTimes,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const MenuDashboard = () => {
  const [menu, setMenu] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newDish, setNewDish] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imageUrl: "",
  });

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/menu");
      if (response.status === 200) {
        setMenu(response.data);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      setError("Failed to load menu items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []); // Removed menu dependency to prevent infinite loop

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this dish?")) {
      try {
        const response = await axios.delete("http://localhost:3001/menu", {
          data: { id },
        });
        if (response.status === 200) {
          await fetchMenu(); // Refresh the menu after deletion
        }
      } catch (error) {
        console.error("Error deleting dish:", error);
        alert("Failed to delete dish. Please try again.");
      }
    }
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/menu", newDish);
      if (response.status === 200) {
        await fetchMenu(); // Refresh the menu after insertion
        setShowForm(false);
        setNewDish({
          name: "",
          price: "",
          description: "",
          category: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      console.error("Error adding new dish:", error);
      alert("Failed to add new dish. Please check your input and try again.");
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading menu items...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="menu-dashboard">
      <div className="dashboard-header">
        <h1>
          <FontAwesomeIcon icon={faUtensils} className="me-2" />
          Menu Dashboard
        </h1>
        <button
          className={`toggle-form-btn ${showForm ? "active" : ""}`}
          onClick={() => setShowForm(!showForm)}
        >
          <FontAwesomeIcon icon={showForm ? faTimes : faPlus} />
          {showForm ? " Cancel" : " Add New Dish"}
        </button>
      </div>

      {showForm && (
        <form className="dish-form" onSubmit={handleInsert}>
          <div className="form-grid">
            <div className="form-group">
              <label>Dish Name</label>
              <input
                type="text"
                required
                placeholder="Enter dish name"
                value={newDish.name}
                onChange={(e) =>
                  setNewDish({ ...newDish, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                required
                step="0.01"
                min="0"
                placeholder="Enter price"
                value={newDish.price}
                onChange={(e) =>
                  setNewDish({ ...newDish, price: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                required
                placeholder="Enter category"
                value={newDish.category}
                onChange={(e) =>
                  setNewDish({ ...newDish, category: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                placeholder="Enter image URL"
                value={newDish.imageUrl}
                onChange={(e) =>
                  setNewDish({ ...newDish, imageUrl: e.target.value })
                }
              />
            </div>
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                required
                placeholder="Enter dish description"
                value={newDish.description}
                onChange={(e) =>
                  setNewDish({ ...newDish, description: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Add Dish
          </button>
        </form>
      )}

      <div className="table-responsive">
        <table className="menu-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.length > 0 ? (
              menu.map((foodMenu) => (
                <tr key={foodMenu._id}>
                  <td data-label="Name">{foodMenu.name}</td>
                  <td data-label="Price">
                    ${Number(foodMenu.price).toFixed(2)}
                  </td>
                  <td data-label="Description">
                    <div className="description-cell">
                      {foodMenu.description}
                    </div>
                  </td>
                  <td data-label="Category">{foodMenu.category}</td>
                  <td data-label="Image">
                    {foodMenu.imageUrl && (
                      <img
                        src={foodMenu.imageUrl}
                        alt={foodMenu.name}
                        className="menu-image"
                      />
                    )}
                  </td>
                  <td data-label="Actions">
                    <button
                      onClick={() => handleDelete(foodMenu._id)}
                      className="delete-btn"
                      title="Delete dish"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No menu items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuDashboard;
