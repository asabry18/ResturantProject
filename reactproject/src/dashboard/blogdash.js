// src/CrudTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogsDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blogs');
        if (response.status === 200) {
          setBlogs(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3001/blogs", {
        data: {
          id
        }
    })
      if (response.status === 200) {
        setBlogs((prevData) => prevData.filter((member) => member._id !== id));
      } 
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };
  return (
    <>  
      <h2>Blog Posts</h2>
      <div className="crud-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>  
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>{blog.body}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(blog._id)} 
                    className="bg-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-100 d-flex justify-content-center">
          <button className="my-4 px-3">Insert</button>
        </div>
      </div>
    </>
  );
};

export default BlogsDashboard;
