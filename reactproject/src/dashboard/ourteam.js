// src/CrudTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamDashboard = () => {
  const [data, setData] = useState([]);

    // fetch menu items from API
    useEffect(() => {
      const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/OurTeam');
      if (response.status === 200)
          setData(response.data);
      }
      fetchData();
    }, [])

  const handleDelete = (id) => {
    try{
      const fetchData = async () => {
        const response = await axios.delete(`http://localhost:3001/OurTeam/${id}`);
        if (response.status === 200)
          setData((prevData) => prevData.filter((member) => member._id !== id));
        }
      fetchData();
    }catch (error){
      console.error("Error deleting member:", error);
    }
  };

  return (
    <>
        <h1 >Team Dashboard</h1>
        <div className="crud-table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>image</th>
                    <th>description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map(member => (
                    <tr key={member._id}>
                    <td>{member.name}</td>
                    <td>{member.position}</td>
                    <td>{member.imageUrl}</td>
                    <td>{member.description}</td>
                    <td>
                        <button onClick={()=>{handleDelete(member._id)}} className='bg-danger ms-5'>Delete</button>
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

export default TeamDashboard;
