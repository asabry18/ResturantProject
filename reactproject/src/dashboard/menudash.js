// src/CrudTable.js
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

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
  
  // const handleDelete = (id) => {
  //   setMenu(menu.filter(item => item.id !== id));
  // };

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
                <td>{foodMenu.rating}</td>
                <td>
                  <button className='bg-danger ms-5'>Delete</button>
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
