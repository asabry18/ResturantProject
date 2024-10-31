// src/CrudTable.js
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MenuDashboard = () => {
  const [menu, setMenu] = useState([]);
    
  //to show the insert form when click on the button 
  const [showForm, setShowForm] = useState(false);

  const [newDish, setNewDish] = useState({
    name: '',
    price: '',
    category: '',
    imageUrl: '',
    rating: ''
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/menu');
        if (response.status === 200) {
          setMenu(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); 
  }, [menu]);
  
  const handleDelete = (id) => {
    try{
      const fetchData = async () => {
        const response = await axios.delete("http://localhost:3001/menu",{
          data: {
            id
        }
      })
        if (response.status === 200)
          setMenu((prevData) => prevData.filter((member) => member._id !== id));
        }
      fetchData();
    }catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  //post data to the database and insert new member
  const handleInsert = async () => {
    try {
      const response = await axios.post('http://localhost:3001/menu', newDish);
      if (response.status === 200) {
        menu((prevData) => [...prevData, response.data]);
        setShowForm(false);
        setNewDish({ 
          name: '',
          price: '',
          category: '',
          imageUrl: '',
          rating: '' });
      }
    } catch (error) {
      console.error("Error adding new member:", error);
    }
  };
  return (
    <>
      <h1 >Menu Dashboard</h1>
      <div className="crud-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.map(foodMenu => (
              <tr key={foodMenu.id}>
                <td>{foodMenu.name}</td>
                <td>{foodMenu.price}</td>
                <td>{foodMenu.category}</td>
                <td>{foodMenu.imageUrl}</td>
                <td>{foodMenu.rating}</td>
                <td>
                  <button onClick={()=>{handleDelete(foodMenu._id)}} className='bg-danger ms-5'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          <div className='w-100 d-flex justify-content-center'>
            <div className="w-100 d-flex justify-content-center">
              <button onClick={() => setShowForm(!showForm)} className="my-4 px-3">
                {showForm ? "Cancel" : "Insert"}
              </button>
            </div>
          </div>
      </div>

      {/* Insert Form */}
      {showForm && (
          <div className="insert-form mt-4">
            <h2>Add New Dish</h2>
            <div>
              <input type="text" placeholder='Name:' value={newDish.name} onChange={(e) => {
                  setNewDish({ ...newDish, name: e.target.value })
                }} />
            </div>
            <div>
              <input type="number" placeholder='price:' value={newDish.price} onChange={(e) => {
                  setNewDish({ ...newDish, price: e.target.value })
                }}/>
            </div>
            <div>
              <input type="text" placeholder='category:' value={newDish.category} onChange={(e) => {
                  setNewDish({ ...newDish, category: e.target.value })
                }}/>
            </div>
            <div>
              <input type="text" placeholder='Image URL:' value={newDish.imageUrl} onChange={(e) => {
                  setNewDish({ ...newDish, imageUrl: e.target.value })
                }} />
            </div>
            <div>
              <input type="number" placeholder='rating:' value={newDish.rating} onChange={(e) => {
                  setNewDish({ ...newDish, rating: e.target.value })
                }}/>
            </div>
            <button onClick={handleInsert} className="mt-2 px-3">Add new dish</button>
          </div>
        )}
    </>
    
  );
};

export default MenuDashboard;
