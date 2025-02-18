import { useState, useEffect } from 'react';
import axios from 'axios';

const Reservation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/reservation');
    if (response.status === 200)
        setData(response.data);
    }
    fetchData();
  }, [data])

  const handleDelete = (id) => {
    try{
      const fetchData = async () => {
        const response = await axios.delete(`http://localhost:3001/reservation/${id}`);
        if (response.status === 200)
          setData((prevData) => prevData.filter((member) => member._id !== id));
        }
      fetchData();
    }catch (error){
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <>
        <h1 >reservations Dashboard</h1>
        <div className="crud-table">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>time</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Total Persons</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map(member => (
                    <tr key={member._id}>
                    <td>{member.date}</td>
                    <td>{member.time}</td>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.totalPerson}</td>
                    <td>
                        <button onClick={()=>{handleDelete(member._id)}} className='bg-danger ms-5'>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
    </>
    
  );
};

export default Reservation;
