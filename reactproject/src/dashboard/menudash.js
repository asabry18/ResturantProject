// src/CrudTable.js
import React, { useState } from 'react';

const MenuDashboard = () => {
  const [data, setData] = useState([]);

  const foodMenu = {
    items: [
      {
        name: 'Margherita Pizza',
        price: 8.99,
        rating: 4.5,
      },
      {
        name: 'Cheeseburger',
        price: 9.49,
        rating: 4.7,
      },
      {
        name: 'Caesar Salad',
        price: 7.99,
        rating: 4.3,
      },
      {
        name: 'Pasta Carbonara',
        price: 11.99,
        rating: 4.6,
      },
      {
        name: 'Tiramisu',
        price: 5.49,
        rating: 4.8,
      },
      {
        name: 'Sushi Platter',
        price: 14.99,
        rating: 4.9,
      },
      {
        name: 'Chocolate Lava Cake',
        price: 6.99,
        rating: 4.5,
      },
      {
        name: 'Greek Yogurt Parfait',
        price: 4.99,
        rating: 4.4,
      },
    ],
  };
  
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
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
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodMenu.items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>

                <td>{item.rating}</td>
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
