// src/CrudTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamDashboard = () => {
  const [data, setData] = useState([]);
  
  //to show the insert form when click on the button 
  const [showForm, setShowForm] = useState(false);

  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    imageUrl: '',
    description: '',
  });

  // fetch menu items from API
  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/OurTeam');
    if (response.status === 200)
        setData(response.data);
    }
    fetchData();
  }, [])

  //delete one member
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

  //set inputs data to insert new member
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({ ...prevMember, [name]: value }));
  };


  // const handleInputChange = (e) => {
  //   setNewMember({
  //     ...newMember,
  //     [e.target.id]: e.target.value,
  //   });
  // };


  //post data to the database and insert new member
  const handleInsert = async () => {
    try {
      const response = await axios.post('http://localhost:3001/OurTeam', newMember);
      if (response.status === 200) {
        setData((prevData) => [...prevData, response.data]);
        setShowForm(false);
        setNewMember({ name: '', position: '', imageUrl: '', description: '' });
      }
    } catch (error) {
      console.error("Error adding new member:", error);
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
                <button onClick={() => setShowForm(!showForm)} className="my-4 px-3">
                  {showForm ? 'Cancel' : 'Insert'}
                </button>
            </div>
        </div>

        {/* Insert Form */}
        {showForm && (
          <div className="insert-form mt-4">
            <h2>Add New Team Member</h2>
            <div>
              <input type="text" placeholder='Name:' value={newMember.name} onChange={handleInputChange} />
            </div>
            <div>
              <input type="text" placeholder='Role:' value={newMember.position} onChange={handleInputChange} />
            </div>
            <div>
              <input type="text" placeholder='Image URL:' value={newMember.imageUrl} onChange={handleInputChange} />
            </div>
            <div>
              <input type="text" placeholder='Description:' value={newMember.description} onChange={handleInputChange} />
            </div>
            <button onClick={handleInsert} className="mt-2 px-3">Add Member</button>
          </div>
        )}
    </>
    
  );
};

export default TeamDashboard;
