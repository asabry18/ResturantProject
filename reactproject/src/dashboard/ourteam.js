// src/CrudTable.js
import React, { useState } from 'react';

const TeamDashboard = () => {
  const [data, setData] = useState([]);

  const  team = {
    members : [
      {
        name: 'Esraa',
        role: 'Developer',
        contact: 'esraa@example.com',
      },
      {
        name: 'Hassan',
        role: 'Designer',
        contact: 'hassan@example.com',
      },
      {
        name: 'Ahmed',
        role: 'Project Manager',
        contact: 'ahmed@example.com',
      },
      {
        name: 'Adham',
        role: 'QA Engineer',
        contact: 'adham@example.com',
      },
      {
        name: 'Mazen',
        role: 'DevOps Engineer',
        contact: 'mazen@example.com',
      },
    ],
  };
  
  const handleDelete = (id) => {
    setData(team.items.filter(item => item.id !== id));
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
                    <th>Contact</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {team.members.map(member => (
                    <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.role}</td>
                    <td>{member.contact}</td>
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

export default TeamDashboard;
