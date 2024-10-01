import { useState } from 'react';
import Card from '../Components/Card/card';

const Blogs = () => {
    const [menu, setMenu] = useState([
        {
            backgroundImage:"/blogimgs/1.png"   , 
            title:'New Restaurant Town Our Ple Award Contract' , 
            paragraph: 'Drive your business and manage risks with a global industry leader.' , 
            date:'Aug 1,2023'
        },
    
        {
            backgroundImage:"/blogimgs/2.png" , 
            title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
            paragraph: 'Start your day right with healthy and nutritious meals' , 
            date:'Jun 14, 2023'
        },
    
        {
            backgroundImage:"/blogimgs/3.png" , 
            title:'Make Authentic Italian Margherita Pizza at Home' , 
            paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
            date:'Sep 5, 2023'
        },
    
        {
            backgroundImage:"/blogimgs/2.png" , 
            title:'Exploring New Food Trends in 2023' , 
            paragraph: 'Discover the latest food trends shaping the culinary world.' , 
            date:'Jan 15, 2023'
        },
    
        {
            backgroundImage:"/blogimgs/1.png" , 
            title:'Healthy Breakfast Recipes for a Great Start' , 
            paragraph: 'Explore delicious and nutritious breakfast options.' , 
            date:'Mar 22, 2023'
        },
    
        {
            backgroundImage:"/blogimgs/2.png" , 
            title:'The Art of Crafting Homemade Pasta' , 
            paragraph: 'Learn how to make authentic Italian pasta from scratch.' , 
            date:'May 9, 2023'
        }
    ]);

    const showMore = ()=>{
        let extraMenuItems = [];
        if (menu.length < 9) {
            extraMenuItems = [
                {
                    backgroundImage:"/blogimgs/1.png" , 
                    title:'New Restaurant Town Our Ple Award Contract' , 
                    paragraph: 'Drive your business and manage risks with a global industry leader.' , 
                    date:'Aug 1,2023'
                },
            
                {
                    backgroundImage:"/blogimgs/2.png" , 
                    title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
                    paragraph: 'Start your day right with healthy and nutritious meals' , 
                    date:'Jun 14, 2023'
                },
            
                {
                    backgroundImage:"/blogimgs/3.png" , 
                    title:'Make Authentic Italian Margherita Pizza at Home' , 
                    paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
                    date:'Sep 5, 2023'
                }
            ]
        }
        
        setMenu([
            ...menu,
            ...extraMenuItems,
        ])
    }

    return (
        <section className="blogSection">
            <div className="blog">
                <div className="blogBg d-flex flex-column justify-content-center align-items-center mb-5">
                    <h1>Blog</h1>
                    <p>Home / Blog</p>
                </div>
                <h3>Latest News</h3>
                <div className="mainBlog">
                {menu.map(menuItem => (
                    <Card data={menuItem} />
                )
                )}
                </div>
                {menu.length < 9 && <button onClick={showMore} className="showMore">Show More</button>}
            </div>
        </section>
    );
};
 
export default Blogs;