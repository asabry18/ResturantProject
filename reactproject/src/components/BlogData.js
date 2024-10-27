import { useState } from 'react';
const BlogsSection = () => {
    const [menu, setMenu] = useState([
        {
            backgroundImage: require('../assets/images/latestnews/grands.png')   , 
            title:'New Restaurant Town Our Ple Award Contract' , 
            paragraph: 'Drive your business and manage risks with a global industry leader.' , 
            date:'Aug 1,2023'
        },
    
        {
            backgroundImage: require('../assets/images/latestnews/salad.png') , 
            title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
            paragraph: 'Start your day right with healthy and nutritious meals' , 
            date:'Jun 14, 2023'
        },
    
        {
            backgroundImage: require('../assets/images/latestnews/chicken.png') , 
            title:'Make Authentic Italian Margherita Pizza at Home' , 
            paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
            date:'Sep 5, 2023'
        },
    
        {
            backgroundImage: require('../assets/images/latestnews/salad.png') , 
            title:'Exploring New Food Trends in 2023' , 
            paragraph: 'Discover the latest food trends shaping the culinary world.' , 
            date:'Jan 15, 2023'
        },
    
        {
            backgroundImage: require('../assets/images/latestnews/grands.png') , 
            title:'Healthy Breakfast Recipes for a Great Start' , 
            paragraph: 'Explore delicious and nutritious breakfast options.' , 
            date:'Mar 22, 2023'
        },
    
        {
            backgroundImage: require('../assets/images/latestnews/chicken.png') , 
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
                    backgroundImage: require('../assets/images/latestnews/grands.png')   , 
                    title:'New Restaurant Town Our Ple Award Contract' , 
                    paragraph: 'Drive your business and manage risks with a global industry leader.' , 
                    date:'Aug 1,2023'
                },
            
                {
                    backgroundImage: require('../assets/images/latestnews/salad.png') , 
                    title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
                    paragraph: 'Start your day right with healthy and nutritious meals' , 
                    date:'Jun 14, 2023'
                },
            
                {
                    backgroundImage: require('../assets/images/latestnews/chicken.png') , 
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
        <section className="blogSection py-5">
            <div className="blog">
                <h3>Latest News</h3>
                <div className="mainBlog">
                {menu.map(menuItem => (
                    <div className="card latestNewsCard">
                    <img src={menuItem.backgroundImage} className="card-img-top" alt="Restaurant-Latest-News" />
                    <div className="card-body">
                        <h5 className="card-title">{menuItem.title}</h5>
                        <p className="card-text opacity-75">{menuItem.paragraph}</p>
                        <hr />
                        <div className="date-blog opacity-75">
                            <p>{menuItem.date}</p>
                            <a href="###" className="opacity-75">Read More</a>
                        </div>
                    </div>
                </div>
                )
                )}
                </div>
                {menu.length < 9 && <button onClick={showMore} className="showMore">Show More</button>}
            </div>
        </section>
    );
};
 
export default BlogsSection;