// src/CrudTable.js
import React, { useState } from 'react';

const BlogsDashboard = () => {
  const [data, setData] = useState([]);

  const blogs = {
    posts: [
      {
        title: 'The Art of Making Margherita Pizza',
        author: 'Esraa Ali',
        content: 'Discover the secrets of crafting the perfect Margherita Pizza with fresh ingredients and classic Italian techniques.',
        date: '2024-09-01',
      },
      {
        title: 'Why Cheeseburgers Never Go Out of Style',
        author: 'Hassan Ahmed',
        content: 'An in-depth look at the popularity of cheeseburgers and how to make them juicy and flavorful at home.',
        date: '2024-09-05',
      },
      {
        title: 'Healthy Eating with Caesar Salad',
        author: 'Ahmed Khaled',
        content: 'Caesar Salad is not just tasty but also healthy. Here’s how to make a nutritious and delicious Caesar Salad.',
        date: '2024-09-10',
      },
      {
        title: 'A Guide to Perfect Pasta Carbonara',
        author: 'Adham Youssef',
        content: 'Learn how to make a classic Pasta Carbonara with creamy sauce, bacon, and Parmesan cheese.',
        date: '2024-09-15',
      },
      {
        title: 'The Sweet History of Tiramisu',
        author: 'Mazen Ibrahim',
        content: 'Explore the origins of Tiramisu and how this Italian dessert has become a favorite worldwide.',
        date: '2024-09-20',
      },
      {
        title: 'Sushi Platter: A Japanese Culinary Experience',
        author: 'Esraa Ali',
        content: 'A guide to understanding and appreciating the art of sushi and how to create your own sushi platter.',
        date: '2024-09-25',
      },
      {
        title: 'Mastering the Chocolate Lava Cake',
        author: 'Hassan Ahmed',
        content: 'Learn the tips and tricks to make a perfect molten chocolate lava cake with a gooey center.',
        date: '2024-09-30',
      },
      {
        title: 'Benefits of Greek Yogurt Parfait',
        author: 'Ahmed Khaled',
        content: 'Discover the health benefits of Greek Yogurt Parfait and how to make it a nutritious breakfast option.',
        date: '2024-10-05',
      },
    ],
  };
  
  
  
  




  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>  
      <h2>Blog Posts</h2>
      <div className="crud-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.posts.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.content}</td>
                <td>
                      <button className='bg-danger '>Delete</button>
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

export default BlogsDashboard;
