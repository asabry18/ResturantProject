// src/CrudTable.js
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MenuDashboard = () => {
  const [menu, setMenu] = useState([]);

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
  }, []);
  
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
              <button className='my-4 px-3'>Insert</button>
          </div>
      </div>
    </>
    
  );
};

export default MenuDashboard;
