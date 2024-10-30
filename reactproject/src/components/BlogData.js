import { useEffect, useState } from 'react';
import axios from 'axios';
const BlogsSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [showMore , setShowMore] = useState(false)
    
    // Fetch Blog by axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blogs');
                if (response.status === 200) {
                    setBlogs(response.data);
                    console.log(response.data)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, []);


    


    return (
        <section className="blogSection py-5">
            <div className="blog">
                <h5 className='newsTitle'>News & Blogs</h5>
                <h1>Latest News</h1>
                <div className="mainBlog">
                {(showMore ? blogs : blogs.slice(0,6)).map(blog => (
                    <div className="card latestNewsCard">
                    <img src={blog.cardImageUrl} className="card-img-top" alt="Restaurant-Latest-News" />
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text opacity-75">{blog.body}</p>
                        <hr />
                        <div className="date-blog opacity-75">
                            <p>{blog.date}</p>
                            <a href="###" className="opacity-75">Read More</a>
                        </div>
                    </div>
                </div>
                )
                )}
                </div>
                {!showMore && <button onClick={()=>{setShowMore(true)}} className="showMore">Show More</button>}
            </div>
        </section>
    );
};
 
export default BlogsSection;