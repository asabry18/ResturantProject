let main = document.getElementById('main')
let menu = [
    {
        backgroundImage:"assets/images/blogimgs/1.png" , 
        title:'New Restaurant Town Our Ple Award Contract' , 
        paragraph: 'Drive your business and manage risks with a global industry leader.' , 
        date:'Aug 1,2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
        paragraph: 'Start your day right with healthy and nutritious meals' , 
        date:'Jun 14, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/3.png" , 
        title:'Make Authentic Italian Margherita Pizza at Home' , 
        paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
        date:'Sep 5, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'Exploring New Food Trends in 2023' , 
        paragraph: 'Discover the latest food trends shaping the culinary world.' , 
        date:'Jan 15, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/1.png" , 
        title:'Healthy Breakfast Recipes for a Great Start' , 
        paragraph: 'Explore delicious and nutritious breakfast options.' , 
        date:'Mar 22, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'The Art of Crafting Homemade Pasta' , 
        paragraph: 'Learn how to make authentic Italian pasta from scratch.' , 
        date:'May 9, 2023'
    },
]

for(let i = 0 ; i<menu.length ; i++) {

    const mainElement = 
    `
    <div class="card" style="width: 23rem;">
            <img src= ${menu[i].backgroundImage} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${menu[i].title}</h5>
              <p class="card-text">${menu[i].paragraph}</p>
              <hr>
              <div class="date-blog">
                <p>${menu[i].date}</p>
                <a href="###">Read More</a>
              </div>
            </div>
        </div>
    `

    main.innerHTML += mainElement
}