// src/CrudTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogsDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  //to show the insert form when click on the button 
  const [showForm, setShowForm] = useState(false);

  const [newBlog, setNewBlog] = useState({
    cardImageUrl: '',
    title: '',
    body: '',
    date: ''
  });

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
  }, [blogs]);

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

  // Insert new blog
  const handleInsert = async () => {
    try {
      const response = await axios.post('http://localhost:3001/blogs', newBlog);
      if (response.status === 200) {
        setBlogs((prevData) => [...prevData, response.data]);
        setShowForm(false);
        setNewBlog({ cardImageUrl: '', title: '', body: '', date: '' });
      }
    } catch (error) {
      console.error("Error adding new blog:", error);
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
            <h2>Add New Blog</h2>
            <div>
              <input type="text" placeholder='cardImageUrl:' value={newBlog.cardImageUrl} onChange={(e) => {
                  setNewBlog({ ...newBlog, cardImageUrl: e.target.value })
                }} />
            </div>
            <div>
              <input type="text" placeholder='title:' value={newBlog.title} onChange={(e) => {
                  setNewBlog({ ...newBlog, title: e.target.value })
                }}/>
            </div>
            <div>
              <input type="text" placeholder='body:' value={newBlog.body} onChange={(e) => {
                  setNewBlog({ ...newBlog, body: e.target.value })
                }}/>
            </div>
            <div>
              <input type="text" placeholder='date:' value={newBlog.date} onChange={(e) => {
                  setNewBlog({ ...newBlog, date: e.target.value })
                }} />
            </div>
            <button onClick={handleInsert} className="mt-2 px-3">Add Blog</button>
          </div>
        )}
    </>
  );
};

export default BlogsDashboard;
